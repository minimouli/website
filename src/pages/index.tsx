/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <div className={styles.container} >

            <Head>
                <title>Minimouli</title>
                <link rel="icon" href="favicon.ico" />
            </Head>

            <h1>hello world</h1>

        </div>
    )
}

export default Home