/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactElement } from 'react'
import { Syntheses } from '@minimouli/types'
import Divider from './Divider'
import FailTest from './FailTest'
import IndicatorLarge from './IndicatorLarge'
import SuccessTest from './SuccessTest'
import LightSuiteSynthesis from '../types/syntheses/LightSuiteSynthesis'
import TestSynthesis from '../types/syntheses/TestSynthesis'
import styles from '../styles/SuiteCard.module.scss'

type SuiteCardProp = {
    suite: LightSuiteSynthesis
}

const SuiteCard = ({suite}: SuiteCardProp) => {
    return (
        <section className={styles.container} >

            <div className={styles.head} >

                <div className={styles.headline} >
                    <h2>{suite.name}</h2>
                </div>

                <div className={styles.indicator} >
                    <IndicatorLarge value={suite.score} />
                </div>

            </div>

            <Divider />

            <div className={styles.tests} >
                {suite.tests.map((test: TestSynthesis, index: number) => {

                    const containsFailures: boolean = suite.score !== 1
                    const isFirstTest: boolean = index === 0

                    const showDivider: boolean = containsFailures && !isFirstTest

                    if (test.status === Syntheses.TestStatus.SUCCESS) {
                        return (
                            <div className={styles.item} key={index} >
                                {showDivider && <Divider/>}
                                <SuccessTest test={test} />
                            </div>
                        )
                    }

                    return (
                        <div className={styles.item} key={index} >
                            {showDivider && <Divider/>}
                            <FailTest test={test} />
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default SuiteCard
