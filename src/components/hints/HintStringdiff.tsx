/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from '../../styles/HintItem.module.scss'
import { Hints } from '@minimouli/types'

interface HintStringDiffProp {
    hint: Hints.StringDiffHint
}

const HintStringdiff = ({hint} : HintStringDiffProp) => {
    console.log(hint);

    if (hint.expected.value.length >= 2 || hint.received.value.length >= 2) {
        return (
            <div className={styles.container_hint}>
                <div className={styles.expect}>
                    <h2>Expected:</h2>
                    {hint.expected.value.map((item, key) => {
                        return <h3 key={key}>{item}</h3>
                    })}
                </div>
                <div className={styles.received}>
                    <h2>Received:</h2>
                    {hint.received.value.map((item, key) => {
                        return <h3 key={key}>{item}</h3>
                    })}
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className={styles.output} style={{marginTop: '18px'}}>
                <div className={styles.title}>Expected:</div>
                    {hint.expected.value[0]}
                </div>
                <div className={styles.output} style={{marginBottom: '12px'}}>
                    <div className={styles.title}>Received:</div>
                    {hint.received.value[0]}
            </div>
        </div>
    )
}

export default HintStringdiff
