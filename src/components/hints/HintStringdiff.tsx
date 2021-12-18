/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactElement } from 'react'
import { Hints } from '@minimouli/types'
import Snippet from './Snippet'
import styles from '../../styles/Hint.module.scss'

interface HintStringDiffProps {
    hint: Hints.StringDiffHint
}

const format = (value: string, type: Hints.ObjectType): ReactElement => {
    switch (type) {
        case Hints.ObjectType.BOOLEAN:
        case Hints.ObjectType.NUMBER:
            return <span className={styles.primitive} >{value}</span>

        case Hints.ObjectType.OBJECT:
        case Hints.ObjectType.UNDEFINED:
            return <span className={styles.neutral} >{value}</span>

        case Hints.ObjectType.STRING:
            return <span className={styles.neutral} >&quot;{value}&quot;</span>
    }
}

const HintStringDiff = ({hint} : HintStringDiffProps) => {
    return (
        <div className={styles.container} >

            {hint.snippet && <Snippet hint={hint} />}

            {hint.message && (
                <div className={styles.message} >
                    <span>{hint.message}</span>
                </div>
            )}

            {hint.expected.value.length > 1 || hint.received.value.length > 1 ? (
                <div className={styles.diffRow} >

                    <div className={styles.item} >
                        <span className={styles.title} >Expected:</span>

                        <div className={styles.values} >
                            {hint.expected.value.map((value: string, index: number) => (
                                <span key={index} >{value}</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.item} >
                        <span className={styles.title} >Received:</span>

                        <div className={styles.values} >
                            {hint.received.value.map((value: string, index: number) => (
                                <span key={index} >{value}</span>
                            ))}
                        </div>
                    </div>

                </div>
            ) : (
                <div className={styles.diffColumn} >

                    <div className={styles.item} >
                        <span className={styles.expected} >Expected: {format(hint.expected.value.join(''), hint.expected.type)}</span>
                    </div>

                    <div className={styles.item} >
                        <span className={styles.received} >Received: {format(hint.received.value.join(''), hint.received.type)}</span>
                    </div>

                </div>
            )}

        </div>
    )
}

export default HintStringDiff
