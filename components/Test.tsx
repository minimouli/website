/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TestStatus } from '@minimouli/types/syntheses'
import { HintType } from '@minimouli/types/hints'
import styles from './Test.module.scss'
import { ComparisonHint } from './hints/ComparisonHint'
import { EqualityHint } from './hints/EqualityHint'
import { MatcherErrorHint } from './hints/MatcherErrorHint'
import { MultilineStringDifferenceHint } from './hints/MultilineStringDifferenceHint'
import { StreamDifferenceHint } from './hints/StreamDifferenceHint'
import { UnilineStringDifferenceHint } from './hints/UnilineStringDifferenceHint'
import { TimeoutHint } from './hints/TimeoutHint'
import type { Hint } from '@minimouli/types/dist/hints'
import type { TestSynthesis } from '@minimouli/types/dist/syntheses'
import type { ReactNode } from 'react'

interface TestProps {
    test: TestSynthesis
    withDivider?: boolean
}
const getStatus = (status: TestStatus): string => {
    switch (status) {
        case TestStatus.Success: {
            return 'Success'
        }
        case TestStatus.Failure: {
            return 'Failure'
        }
        default: {
            return 'Undefined'
        }
    }
}

const getHint = (hint: Hint): ReactNode => {
    switch (hint.type) {
        case HintType.Comparison: {
            return <ComparisonHint hint={hint} />
        }
        case HintType.Equality: {
            return <EqualityHint hint={hint} />
        }
        case HintType.StreamDifference: {
            return <StreamDifferenceHint hint={hint} />
        }
        case HintType.StringDifference: {
            if (hint.expected.value.length + hint.received.value.length > 2)
                return <MultilineStringDifferenceHint hint={hint} />

            return <UnilineStringDifferenceHint hint={hint} />
        }
        case HintType.Timeout: {
            return <TimeoutHint hint={hint} />
        }
        case HintType.MatcherError: {
            return <MatcherErrorHint hint={hint} />
        }
        default: {
            // eslint-disable-next-line unicorn/no-null
            return null
        }
    }
}

const Test = ({ test, withDivider = false }: TestProps) => (
    <div className={`${styles.container} ${withDivider ? styles.withDivider : ''}`} >
        <div className={styles.head} >
            <span className={styles.name} >{test.name}</span>
            <span className={styles.status} >{getStatus(test.status)}</span>
        </div>

        {test.hint !== undefined && (
            <div className={styles.hint} >
                {getHint(test.hint)}
            </div>
        )}
    </div>
)

export {
    Test
}
