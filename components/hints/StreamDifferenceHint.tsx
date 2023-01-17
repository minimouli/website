/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './StreamDifferenceHint.module.scss'
import { HintSnippet } from '../HintSnippet'
import type { StreamDifferenceHint as StreamDifferenceHintType } from '@minimouli/types/hints'

interface StreamDifferenceHintProps {
    hint: StreamDifferenceHintType
}

const StreamDifferenceHint = ({ hint }: StreamDifferenceHintProps) => (
    <div className={styles.hint} >

        {hint.snippet !== undefined && (
            <HintSnippet snippet={hint.snippet} />
        )}

        <span className={styles.message} >Output differs from what is expected</span>

        {hint.message !== undefined && (
            <span className={styles.message} >{hint.message}</span>
        )}
    </div>
)

export {
    StreamDifferenceHint
}
