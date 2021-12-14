/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import { Hints } from '@minimouli/types'
 import styles from '../../styles/HintItem.module.scss'

 interface HintStringdiffProp {
     hint: Hints.StreamDiffHint
 }
 
 const HintStreamdiff = ({hint} : HintStringdiffProp) => {
     return (
         <div className={styles.stream_diff}>The output differs</div>
     )
 }
 
export default HintStreamdiff
 