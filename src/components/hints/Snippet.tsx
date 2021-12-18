/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hints } from '@minimouli/types'
import styles from '../../styles/Snippet.module.scss'

interface SnippetProps {
    hint: Hints.Hint
}

const Snippet = ({hint}: SnippetProps) => {

    if (!hint.snippet)
        return null

    return (
        <div className={styles.container} >
            <span>
                <span>expect(</span>
                <span className={styles.red} >{hint.snippet.arguments.received.join(', ')}</span>
                <span>).</span>
                <span className={styles.white} >{hint.snippet.method}</span>
                <span>(</span>
                <span className={styles.green} >{hint.snippet.arguments.expected.join(', ')}</span>
                <span>)</span>
            </span>
        </div>
    )
}

export default Snippet
