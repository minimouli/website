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
import styles from '../../styles/Changelog.module.scss'
import changelog from '../../assets/changelog.json'

type ChangelogProps = {
    post: any
}

const stringifyMonth = (monthNumber: number) => {
    switch (monthNumber) {
        case 0:  return 'Jan'
        case 1:  return 'Feb'
        case 2:  return 'Mar'
        case 3:  return 'Apr'
        case 4:  return 'May'
        case 5:  return 'Jun'
        case 6:  return 'Jul'
        case 7:  return 'Aug'
        case 8:  return 'Sep'
        case 9:  return 'Oct'
        case 10: return 'Nov'
        case 11: return 'Dec'
    }
}

const renderer = {
    heading: (text: string, level: number) => {

        level += 1

        return `<h${level}>${text}</h${level}>`
    }
}

const Changelog: NextPage<ChangelogProps> = ({ post }: ChangelogProps) => {

    marked.use({ renderer })

    return (
        <div className={styles.container} >

            <Head>
                <title>{post.title}</title>
                <meta name="robots" content="noindex" />
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
                    <div className={styles.titles} >
                        <div className={styles.info} >
                            <Link href="/changelog" passHref >
                                <span className={styles.back} >Back to Changelog</span>
                            </Link>
                        </div>

                        <div className={styles.body} >
                            <h1>{post.title}</h1>
                        </div>
                    </div>

                    <Divider />

                    <section className={styles.post} >
                        <div className={styles.info} >
                            <span className={styles.date} >{stringifyMonth(post.date.month)} {post.date.day}, {post.date.year}</span>
                        </div>

                        <div className={styles.body} >
                            <div
                                className={`${styles.markdown} ${styles.large}`}
                                dangerouslySetInnerHTML={{__html: marked.parse(post.content)}} >
                            </div>
                        </div>
                    </section>

                </Container>

            </main>

            <Footer />

        </div>
    )
}

const getStaticProps: GetStaticProps<ChangelogProps> = async (context: GetStaticPropsContext) => {

    if (!context.params) {
        return {
            props: {
                post: {}
            }
        }
    }

    const { id } = context.params
    const baseDir = `${process.cwd()}/src/assets/posts`

    const post = changelog.posts.find((post) => {
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
        paths: changelog.posts.map((post) => ({
            params: {
                id: post.id
            }
        })),
        fallback: false
    }
}

export default Changelog
export {
    getStaticProps,
    getStaticPaths
}
