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

interface HintEqualProps {
    hint: Hints.EqualHint
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

const HintEqual = ({hint} : HintEqualProps) => {
    return (
        <div className={styles.container} >

            {(hint.category !== Hints.HintCategory.EXIT_CODE || hint.received.value !== 'null') && hint.snippet && <Snippet hint={hint} />}

            {hint.category === Hints.HintCategory.EXIT_CODE && hint.received.value === 'null' && (
                <div className={styles.message} >
                    <span>The executable crash.</span>
                </div>
            )}

            {hint.message && (
                <div className={styles.message} >
                    <span>{hint.message}</span>
                </div>
            )}

            {(hint.category !== Hints.HintCategory.EXIT_CODE || hint.received.value !== 'null') && (
                <div className={styles.diffColumn} >

                    {hint.expected && (
                        <div className={styles.item} >
                            <span className={styles.expected} >Expected: {format(hint.expected.value, hint.expected.type)}</span>
                        </div>
                    )}

                    <div className={styles.item} >
                        <span className={styles.received} >Received: {format(hint.received.value, hint.received.type)}</span>
                    </div>

                </div>
            )}

        </div>
    )
}

export default HintEqual
