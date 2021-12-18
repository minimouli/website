/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactElement } from 'react'
import { Hints, Syntheses } from '@minimouli/types'
import ChipCounter from './ChipCounter'
import Divider from './Divider'
import FailTest from './FailTest'
import IndicatorLarge from './IndicatorLarge'
import SuccessTest from './SuccessTest'
import LightSuiteSynthesis from '../types/LightSuiteSynthesis'
import styles from '../styles/SuiteCard.module.scss'

interface SuiteCardProps {
    suite: LightSuiteSynthesis
}

const isDividerNeeded = (suite: LightSuiteSynthesis, current: Syntheses.TestSynthesis, index: number): boolean => {

    const next: Syntheses.TestSynthesis | undefined = suite.tests[index + 1]

    const containsFailures: boolean = suite.score !== 1

    if (!containsFailures)
        return false

    const isLast: boolean = index === suite.tests.length - 1
    const isCurrentAFailure: boolean = current.status === Syntheses.TestStatus.FAILURE
    const isNextAFailure: boolean = next?.status === Syntheses.TestStatus.FAILURE || false

    if (isLast)
        return false

    if (isCurrentAFailure)
        return true

    if (isNextAFailure)
        return true

    return false
}

const countCategory = (tests: Syntheses.TestSynthesis[], category: Hints.HintCategory): number => {

    return tests.reduce((previous: number, test: Syntheses.TestSynthesis) => {

        if (!test.hint)
            return previous

        if (test.hint.category === category)
            return previous + 1

        return previous
    }, 0)
}

const SuiteCard = ({suite}: SuiteCardProps) => {

    const categorizedTests: Syntheses.TestSynthesis[] = suite.tests.filter((test: Syntheses.TestSynthesis) => !!test.hint?.category)
    const chips = {
        output: countCategory(categorizedTests, Hints.HintCategory.OUTPUT),
        exitCode: countCategory(categorizedTests, Hints.HintCategory.EXIT_CODE),
        timeout: countCategory(categorizedTests, Hints.HintCategory.TIMEOUT)
    }

    return (
        <section className={styles.container} >

            <div className={styles.head} >

                <div className={styles.headline} >

                    <div className={styles.title} >
                        <h2>{suite.name}</h2>
                    </div>

                    {categorizedTests.length > 0 && (
                        <div className={styles.chips} >

                            {chips.output > 0 && <ChipCounter category={Hints.HintCategory.OUTPUT} value={chips.output} />}
                            {chips.exitCode > 0 && <ChipCounter category={Hints.HintCategory.EXIT_CODE} value={chips.exitCode} />}
                            {chips.timeout > 0 && <ChipCounter category={Hints.HintCategory.TIMEOUT} value={chips.timeout} />}

                        </div>
                    )}

                </div>

                <div className={styles.indicator} >
                    <IndicatorLarge value={suite.score} />
                </div>

            </div>

            <Divider />

            <div className={styles.tests} >
                {suite.tests.map((test: Syntheses.TestSynthesis, index: number) => {

                    const showDivider: boolean = isDividerNeeded(suite, test, index)

                    if (test.status === Syntheses.TestStatus.SUCCESS) {
                        return (
                            <div className={styles.item} key={index} >
                                <SuccessTest test={test} />
                                {showDivider && <Divider/>}
                            </div>
                        )
                    }

                    return (
                        <div className={styles.item} key={index} >
                            <FailTest test={test} />
                            {showDivider && <Divider/>}
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default SuiteCard
