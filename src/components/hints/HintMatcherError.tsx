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

interface HintMatcherErrorProps {
    hint: Hints.MatcherErrorHint
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

const HintMatcherError = ({hint} : HintMatcherErrorProps) => {
    return (
        <div className={styles.container} >

            {hint.snippet && <Snippet hint={hint} />}

            <div className={styles.message} >
                <span>{hint.message}</span>
            </div>

            {hint.received && (
                <div className={styles.diffColumn} >

                    <div className={styles.item} >
                        <span className={styles.received} >Received: {format(hint.received.value, hint.received.type)}</span>
                    </div>

                </div>
            )}

        </div>
    )
}

export default HintMatcherError
