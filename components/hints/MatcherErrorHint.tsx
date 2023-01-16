/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './ComparisonHint.module.scss'
import { HintSnippet } from '../HintSnippet'
import type { MatcherErrorHint as MatcherErrorHintType } from '@minimouli/types/hints'

interface MatcherErrorHintProps {
    hint: MatcherErrorHintType
}

const MatcherErrorHint = ({ hint }: MatcherErrorHintProps) => (
    <div className={styles.hint} >

        {hint.snippet !== undefined && (
            <HintSnippet snippet={hint.snippet} />
        )}

        <span className={styles.message} >An unexpected error has occurred in the moulinette</span>
        <span className={styles.message} >{hint.message}</span>
    </div>
)

export {
    MatcherErrorHint
}
