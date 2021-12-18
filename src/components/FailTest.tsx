/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Syntheses, Hints } from '@minimouli/types'
import Chip from './Chip'
import HintItem from './hints/HintItem'
import styles from '../styles/FailTest.module.scss'

interface FailTestProps {
    test: Syntheses.TestSynthesis
}

const FailTest = ({test}: FailTestProps) => {
    return (
        <div className={styles.container} >
            <div className={styles.headline} >

                <div className={styles.name} >

                    <span>{test.name}</span>

                    {test.hint?.category && (
                        <div className={styles.chip} >
                            <Chip category={test.hint.category}/>
                        </div>
                    )}

                </div>

                <div className={styles.status} >
                    <span>Failed</span>
                </div>
            </div>
            {test.hint && <HintItem hint={test.hint}/>}
        </div>
    )
}

export default FailTest
