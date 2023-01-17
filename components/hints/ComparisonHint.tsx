/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintCategory } from '@minimouli/types/hints'
import styles from './ComparisonHint.module.scss'
import { HintSnippet } from '../HintSnippet'
import type { ComparisonHint as ComparisonHintType } from '@minimouli/types/hints'

interface ComparisonHintProps {
    hint: ComparisonHintType
}

const ComparisonHint = ({ hint }: ComparisonHintProps) => (
    <div className={styles.hint} >

        {hint.snippet !== undefined && (
            <HintSnippet snippet={hint.snippet} />
        )}

        {hint.category === HintCategory.ExitCode && (
            <span className={styles.message} >The executable exited with an invalid exit code (possibly a crash)</span>
        )}

        {hint.message !== undefined && (
            <span className={styles.message} >{hint.message}</span>
        )}

        <div className={styles.difference} >

            <div className={styles.line} >
                <span className={styles.title} >Expected:</span>
                <div className={styles.content} >
                    <span>{hint.symbol} <span className={styles.success} >{hint.expected.value}</span></span>
                </div>
            </div>

            <div className={styles.line} >
                <span className={styles.title} >Received:</span>
                <div className={styles.content} >
                    <span className={styles.failure} >{hint.received.value}</span>
                </div>
            </div>

        </div>
    </div>
)

export {
    ComparisonHint
}
