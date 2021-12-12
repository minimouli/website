/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../components/Container'
import RunHeader from '../../components/RunHeader'
import RunCard from '../../components/RunCard'
import SuiteCard from '../../components/SuiteCard'
import SuiteSynthesis from '../../types/syntheses/SuiteSynthesis'
import LightSuiteSynthesis from '../../types/syntheses/LightSuiteSynthesis'
import styles from '../../styles/Run.module.scss'
import config from '../../config'

const processSuite = (suite: SuiteSynthesis, prefix: string[] = []): LightSuiteSynthesis => {

    prefix = prefix.concat(suite.name)

    let children: LightSuiteSynthesis[] = []

    suite.suites.map((suite: SuiteSynthesis) => {
        children = children.concat(processSuite(suite, prefix))
    })

    if (suite.tests.length === 0)
        return children

    const newSuite: LightSuiteSynthesis = {
        name: prefix.join(' / '),
        duration: 0,
        score: 0,
        tests: suite.tests
    }

    return [newSuite, ...children]
}

const Run: NextPage = () => {

    const router = useRouter()

    const [projectName, setProjectName] = useState('')
    const [moduleCode, setModuleCode] = useState('')
    const [suites, setSuites] = useState<LightSuiteSynthesis[]>([])

    useEffect(() => {

        const { id } = router.query

        if (!id)
            return

        fetch(`${config.api.baseUrl}/run/${id}`)
        .then(res => res.json())
        .then((res) => {

            const suites: SuiteSynthesis[] = res.data.suites
            let lightSuites: LightSuiteSynthesis[] = []

            suites.forEach((suite: SuiteSynthesis) => {
                lightSuites = lightSuites.concat(processSuite(suite))
            })

            setProjectName(res.data.project.name)
            setModuleCode(res.data.project.module_code || res.data.project.module)
            setSuites(lightSuites)
        })
        .catch((e) => {

            console.log(e)

        })

    }, [router.isReady])

    return (
        <div className={styles.container} >

            <Head>
                <title>Minimouli</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <RunHeader projectName={projectName} moduleCode={moduleCode} />

            <main className={styles.main} >
                <Container>
                    <div className={styles.cards} >

                        <div className={styles.col} >
                            {suites.map((suite: LightSuiteSynthesis, index: number) => (
                                <SuiteCard key={index} suite={suite} />
                            ))}
                        </div>

                        <div className={`${styles.col} ${styles.col_suites}`} >
                            {suites.length > 0 && (<RunCard suites={suites} />)}
                        </div>

                    </div>
                </Container>
            </main>

        </div>
    )
}

export default Run
