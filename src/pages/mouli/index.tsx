/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as fs from 'fs'
import * as process from 'process'
import type { NextPage, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import RegularHeader from '../../components/RegularHeader'
import styles from '../../styles/MouliAll.module.scss'
import moulis from '../../assets/mouli.json'

type MouliProps = {
    posts: any[]
}

const Mouli: NextPage<MouliProps> = ({ posts }: MouliProps) => {
    return (
        <div className={styles.container} >

            <Head>
                <title>Mouli</title>
                <meta name="description" content="List of all the mouli available." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <RegularHeader>

                <Link href="/" passHref >
                    <span>Installation</span>
                </Link>

                <Link href="/mouli" passHref >
                    <span data-selected >Mouli</span>
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
                    <div className={styles.grid} >

                        {posts.map((post, index) => (
                            <Link href={`/mouli/${post.id}`} key={index} passHref >
                                <section>
                                    <div className={styles.body} >
                                        <h1>{post.title}</h1>
                                        <span>{post.description}</span>
                                    </div>

                                    <div className={styles.footer} >
                                        <Link href={post.github.url} passHref >
                                            <span className={styles.package} >{post.github.name}</span>
                                        </Link>
                                    </div>
                                </section>
                            </Link>
                        ))}

                    </div>
                </Container>

            </main>

            <Footer />

        </div>
    )
}

const getStaticProps: GetStaticProps<MouliProps> = async (context: GetStaticPropsContext) => {

    const baseDir = `${process.cwd()}/src/assets/mouli`

    const posts = moulis.posts.map((post) => ({
        ...post,
        content: fs.readFileSync(`${baseDir}/${post.id}.md`).toString()
    }))

    return {
        props: {
            posts
        }
    }
}

export default Mouli
export {
    getStaticProps
}
