/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Syntheses, Hints } from '@minimouli/types'
import styles from '../styles/FailTest.module.scss'
import Divider from './Divider'
import HintItem from './hints/HintItem'

type FailTestProp = {
    test: Syntheses.TestSynthesis
}

type ChipProp = {
    category: Hints.HintCategory
}

const Chip = ({category} : ChipProp) => {
    let style;

    switch (category) {
        case Hints.HintCategory.OUTPUT:
            style = {background: 'var(--output-color)'}
            break
        case Hints.HintCategory.EXIT_CODE:
            style = {background: 'var(--exit-code-color)'}
            break
        case Hints.HintCategory.TIMEOUT:
            style = {background: 'var(--timeout-color)'}
            break
    }

    return (
        <div className={styles.chip} style={style} ></div>
    )
}

const FailTest = ({test}: FailTestProp) => {
    return (
        <>
            <div className={styles.container} >
                <div className={styles.headline} >

                    <div className={styles.name} >
                        <span>{test.name}</span>
                        {test.hint?.category && <Chip category={test.hint.category}/>}
                    </div>

                    <div className={styles.status} >
                        <span>Failed</span>
                    </div>
                </div>
                {test.hint && <HintItem hint={test.hint}/>}
            </div>
            <Divider />
        </>
    )
}

export default FailTest
