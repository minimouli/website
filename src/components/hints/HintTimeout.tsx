/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hints } from '@minimouli/types'
import Snippet from './Snippet'
import styles from '../../styles/Hint.module.scss'

interface HintTimeoutProps {
    hint: Hints.TimeoutHint
}

const HintTimeout = ({hint} : HintTimeoutProps) => {
    return (
        <div className={styles.container} >

            {hint.snippet && <Snippet hint={hint} />}

            <div className={styles.message} >
                <span>Timeout after {hint.timeout}ms.</span>
            </div>

            {hint.message && (
                <div className={styles.message} >
                    <span>{hint.message}</span>
                </div>
            )}

        </div>
    )
}

export default HintTimeout
