/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactElement } from 'react'
import Divider from './Divider'
import FailTest from './FailTest'
import SuccessTest from './SuccessTest'
import LightSuiteSynthesis from '../../types/syntheses/LightSuiteSynthesis'
import TestSynthesis from '../../types/syntheses/TestSynthesis'
import styles from '../styles/SuiteCard.module.scss'

type SuiteCardProp = {
    suite: LightSuiteSynthesis,
    children: ReactElement
}

const SuiteCard = ({suite, children}: SuiteCardProp) => {
    return (
        <section className={styles.container} >

            <div className={styles.head} >
                <div className={styles.headline} >
                    <h2>{suite.name}</h2>
                </div>
            </div>

            <Divider />

            <div className={styles.tests} >
                {suite.tests.map((test: TestSynthesis, index: number) => {

                    if (test.status === 'Status.SUCCESS')
                        return <SuccessTest key={index} test={test} />

                    return <FailTest key={index} test={test} />
                })}
            </div>

        </section>
    )
}

export default SuiteCard
