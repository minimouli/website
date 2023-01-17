/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TestStatus } from '@minimouli/types/syntheses'
import styles from './SuiteCard.module.scss'
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

const SuiteCard = ({ suite }: SuiteCardProps) => (
    <section className={styles.card} >
        <div className={styles.head} >
            <span>{suite.path.join(' / ')}</span>
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

export {
    SuiteCard
}
