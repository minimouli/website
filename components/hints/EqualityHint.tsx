/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintCategory } from '@minimouli/types/hints'
import styles from './ComparisonHint.module.scss'
import { HintSnippet } from '../HintSnippet'
import type { EqualityHint as EqualityHintType } from '@minimouli/types/hints'

interface EqualityHintProps {
    hint: EqualityHintType
}

const EqualityHint = ({ hint }: EqualityHintProps) => (
    <div className={styles.hint} >

        {hint.snippet !== undefined && (
            <HintSnippet snippet={hint.snippet} />
        )}

        {hint.category === HintCategory.Output && (
            <span className={styles.message} >Output differs from what is expected</span>
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
                    <span className={styles.success} >{hint.expected?.value ?? ''}</span>
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
    EqualityHint
}
