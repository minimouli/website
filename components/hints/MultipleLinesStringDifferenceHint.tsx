/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintCategory } from '@minimouli/types/hints'
import styles from './MultipleLinesStringDifferenceHint.module.scss'
import { HintSnippet } from '../HintSnippet'
import { StringDifference } from '../StringDifference'
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

        <StringDifference oldArray={hint.expected.value} newArray={hint.received.value} />
    </div>
)

export {
    MultipleLinesStringDifferenceHint
}
