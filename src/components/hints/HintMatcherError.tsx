/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hints } from '@minimouli/types'
import styles from '../../styles/HintItem.module.scss'

interface HintMatcherErrorProp {
    hint: Hints.MatcherErrorHint
}
 
const HintMatcherError = ({hint} : HintMatcherErrorProp) => {
    console.log(hint);
    return (
        <div className={styles.stream_diff}>The matcher results with an error</div>
    )
}
 
export default HintMatcherError
 