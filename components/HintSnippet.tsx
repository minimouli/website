/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './HintSnippet.module.scss'

interface HintSnippetProps {
    snippet: {
        arguments: {
            received: string[]
            expected: string[]
        }
        method: string
    }
}

const HintSnippet = ({ snippet }: HintSnippetProps) => (
    <span className={styles.snippet} >
        expect(
        {snippet.arguments.received.map((received, index, array) => (
            <span key={received} className={styles.received} >
                {received}
                {index < array.length - 1 && (
                    <span className={styles.separation} >, </span>
                )}
            </span>
        ))}
        ).
        <span className={styles.method} >{snippet.method}</span>
        (
        {snippet.arguments.expected.map((expected, index, array) => (
            <span key={expected} className={styles.expected} >
                {expected}
                {index < array.length - 1 && (
                    <span className={styles.separation} >, </span>
                )}
            </span>
        ))}
        )
    </span>
)

export {
    HintSnippet
}
