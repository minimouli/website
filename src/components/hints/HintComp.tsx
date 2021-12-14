/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hints } from '@minimouli/types'
import styles from '../../styles/HintItem.module.scss'

interface HintCompProp {
    hint: Hints.CompHint
}
 
const HintComp = ({hint} : HintCompProp) => {
    return (
        <div>
            <div className={styles.equal_output} style={{marginTop: '18px'}}>
                <div className={styles.title}>Expected: {hint.symbol}</div>
                    {hint.expected.value}
                </div>
            <div className={styles.false_output} style={{marginBottom: '12px'}}>
                <div className={styles.title}>Received:</div>
                {hint.received.value}
            </div>
        </div>
    )
}
 
export default HintComp
 