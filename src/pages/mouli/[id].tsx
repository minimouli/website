/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as fs from 'fs'
import * as process from 'process'
import { marked } from 'marked'
import type { NextPage, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/Container'
import Divider from '../../components/Divider'
import Footer from '../../components/Footer'
import RegularHeader from '../../components/RegularHeader'
import styles from '../../styles/MouliSingle.module.scss'
import moulis from '../../assets/mouli.json'

type MouliProps = {
    post: any
}

const renderer = {
    heading: (text: string, level: number) => {
        return `<h${level}>${text}</h${level}>`
    }
}

const Mouli: NextPage<MouliProps> = ({ post }: MouliProps) => {

    marked.use({ renderer })

    return (
        <div className={styles.container} >

            <Head>
                <title>Minimouli {post.title}</title>
                <meta name="description" content={`Minimouli for the ${post.title} project.`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <RegularHeader>

                <Link href="/" passHref >
                    <span>Installation</span>
                </Link>

                <Link href="/mouli" passHref >
                    <span>Mouli</span>
                </Link>

                <Link href="https://github.com/minimouli" passHref >
                    <span>Open Source</span>
                </Link>

                <Link href="/changelog" passHref >
                    <span>Changelog</span>
                </Link>

            </RegularHeader>

            <main className={styles.main} >

                <Container>
                    <div className={styles.page} >

                        <div className={styles.col} >
                            <div
                                className={styles.markdown}
                                dangerouslySetInnerHTML={{__html: marked.parse(post.content)}} >
                            </div>
                        </div>

                        <div className={`${styles.col} ${styles.col_details}`} >
                            <div className={styles.card} >

                                <div className={styles.head} >
                                    <h2>Details</h2>
                                </div>

                                <Divider />

                                <div className={styles.body} >

                                    {Object.entries(post.details).map(([key, value], index) => (
                                        <div className={styles.item} key={index} >
                                            <span className={styles.title} >{key}</span>
                                            <span className={styles.value} >{value as string}</span>
                                        </div>
                                    ))}

                                </div>

                            </div>
                        </div>

                    </div>
                </Container>

            </main>

            <Footer />

        </div>
    )
}

const getStaticProps: GetStaticProps<MouliProps> = async (context: GetStaticPropsContext) => {

    if (!context.params) {
        return {
            props: {
                post: {}
            }
        }
    }

    const { id } = context.params
    const baseDir = `${process.cwd()}/src/assets/mouli`

    const post = moulis.posts.find((post) => {
        return post.id === id
    })

    if (!post) {
        return {
            props: {
                post: {}
            }
        }
    }

    return {
        props: {
            post: {
                ...post,
                content: fs.readFileSync(`${baseDir}/${post?.id}.md`).toString()
            }
        }
    }
}

const getStaticPaths = async () => {

    return {
        paths: moulis.posts.map((mouli) => ({
            params: {
                id: mouli.id
            }
        })),
        fallback: false
    }
}

export default Mouli
export {
    getStaticProps,
    getStaticPaths
}
