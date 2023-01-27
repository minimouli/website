/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TestStatus } from '@minimouli/types/syntheses'
import { HintCategory } from '@minimouli/types/hints'
import styles from './SuiteCard.module.scss'
import { CategoryChip } from '../CategoryChip'
import { LargeIndicator } from '../LargeIndicator'
import { Test } from '../Test'
import type { LightSuiteSynthesis } from '../../types/LightSuiteSynthesis'
import type { TestSynthesis } from '@minimouli/types/dist/syntheses'

interface SuiteCardProps {
    suite: LightSuiteSynthesis
}

const isDividerNeeded = (current: TestSynthesis, tests: TestSynthesis[], index: number) => {

    const isLastOne = index === tests.length - 1
    if (isLastOne)
        return false

    if (current.status === TestStatus.Failure)
        return true

    const next = tests.at(index + 1)
    if (next === undefined)
        return false

    return next.status === TestStatus.Failure
}

const SuiteCard = ({ suite }: SuiteCardProps) => {

    const outputCount = suite.tests.filter((test) => test.hint?.category === HintCategory.Output).length
    const exitCodeCount = suite.tests.filter((test) => test.hint?.category === HintCategory.ExitCode).length
    const timeoutCount = suite.tests.filter((test) => test.hint?.category === HintCategory.Timeout).length

    return (
        <section className={styles.card} >
            <div className={styles.head} >
                <div className={styles.title} >
                    <span className={styles.name} >{suite.path.join(' / ')}</span>
                    <div className={styles.chips} >
                        {outputCount > 0 && (
                            <div className={styles.chip} >
                                <CategoryChip category={HintCategory.Output} />
                                <span>{outputCount} output{outputCount === 1 ? '' : 's'}</span>
                            </div>
                        )}

                        {exitCodeCount > 0 && (
                            <div className={styles.chip} >
                                <CategoryChip category={HintCategory.ExitCode} />
                                <span>{exitCodeCount} exit code{exitCodeCount === 1 ? '' : 's'}</span>
                            </div>
                        )}

                        {timeoutCount > 0 && (
                            <div className={styles.chip} >
                                <CategoryChip category={HintCategory.Timeout} />
                                <span>{timeoutCount} timeout{timeoutCount === 1 ? '' : 's'}</span>
                            </div>
                        )}
                    </div>
                </div>
                <LargeIndicator value={suite.score} />
            </div>

            <div className={styles.body} >
                {suite.tests.map((test, index) => (
                    <Test
                        key={test.name}
                        test={test}
                        withDivider={isDividerNeeded(test, suite.tests, index)}
                    />
                ))}
            </div>
        </section>
    )
}

export {
    SuiteCard
}
