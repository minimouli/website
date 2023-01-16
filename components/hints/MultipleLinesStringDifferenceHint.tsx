/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintCategory } from '@minimouli/types/hints'
import styles from './MultipleLinesStringDifferenceHint.module.scss'
import { HintSnippet } from '../HintSnippet'
import type { StringDifferenceHint } from '@minimouli/types/hints'

interface MultipleLinesStringDifferenceHintProps {
    hint: StringDifferenceHint
}

const MultipleLinesStringDifferenceHint = ({ hint }: MultipleLinesStringDifferenceHintProps) => (
    <div className={styles.hint} >

        {hint.snippet !== undefined && (
            <HintSnippet snippet={hint.snippet} />
        )}

        {hint.category === HintCategory.Output && (
            <span className={styles.message} >Output differs from what is expected</span>
        )}

        {hint.message !== undefined && (
            <span className={styles.message} >{hint.message}</span>
        )}

        <div className={styles.difference} >

            <div className={styles.column} >
                <span className={styles.title} >Expected:</span>
                <div className={styles.content} >
                    {hint.expected.value.map((expected, index) => (
                        <span key={index} >
                            {expected}
                            <span className={styles.indication} >
                                {index === hint.expected.value.length - 1 ? '$' : '↵'}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.column} >
                <span className={styles.title} >Received:</span>
                <div className={styles.content} >
                    {hint.received.value.map((received, index) => (
                        <span key={index} >
                            {received}
                            <span className={styles.indication} >
                                {index === hint.received.value.length - 1 ? '$' : '↵'}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

        </div>
    </div>
)

export {
    MultipleLinesStringDifferenceHint
}
