/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './ComparisonHint.module.scss'
import type { TimeoutHint as TimeoutHintType } from '@minimouli/types/hints'

interface TimeoutHintProps {
    hint: TimeoutHintType
}

const TimeoutHint = ({ hint }: TimeoutHintProps) => (
    <div className={styles.hint} >
        <span className={styles.message} >Timed out after {hint.timeout}ms</span>

        {hint.message !== undefined && (
            <span className={styles.message} >{hint.message}</span>
        )}
    </div>
)

export {
    TimeoutHint
}
