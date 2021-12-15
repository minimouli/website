/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Syntheses } from '@minimouli/types'
import styles from '../styles/SuccessTest.module.scss'

type SuccessTestProp = {
    test: Syntheses.TestSynthesis
}

const SuccessTest = ({test}: SuccessTestProp) => {
    return (
        <div className={styles.container} >
            <div className={styles.headline} >

                <div className={styles.name} >
                    <span>{test.name}</span>
                </div>

                <div className={styles.status} >
                    <span>Success</span>
                </div>

            </div>
        </div>
    )
}

export default SuccessTest
