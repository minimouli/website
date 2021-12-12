/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from '../styles/FailTest.module.scss'
import TestSynthesis from '../../types/syntheses/TestSynthesis'

type FailTestProp = {
    test: TestSynthesis
}

const FailTest = ({test}: FailTestProp) => {
    return (
        <div className={styles.container} >
            <div className={styles.headline} >

                <div className={styles.name} >
                    <span>{test.name}</span>
                </div>

                <div className={styles.status} >
                    <span>Failed</span>
                </div>

            </div>
        </div>
    )
}

export default FailTest
