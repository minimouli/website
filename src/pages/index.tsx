/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/Container'
import Footer from '../components/Footer'
import InstallSnippet from '../components/InstallSnippet'
import RegularHeader from '../components/RegularHeader'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.container} >

            <Head>
                <title>Minimouli</title>
                <meta name="description" content="Get feedback on your projects without waiting for nao" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <RegularHeader>

                <Link href="/" passHref >
                    <span data-selected >Installation</span>
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

            <Container>
                <main className={styles.hero} >

                    <div className={styles.headlines} >
                        <h1>Get feedback on your projects without waiting for nao</h1>
                        <h2>Minimouli offers the best toolchain of testing to help developers maintain the quality of their projects.</h2>
                    </div>

                    <div className={styles.installation} >

                        <div className={styles.snippet} >
                            <InstallSnippet />
                        </div>

                        <span className={styles.caption} >
                            Once installed, just type
                            <span className={styles.command} >
                                minimouli run
                            </span>
                            in your repository.
                        </span>

                    </div>

                </main>
            </Container>

            <Footer />

        </div>
    )
}

export default Home
