/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hints } from '@minimouli/types'
import Chip from './Chip'
import styles from '../styles/ChipCounter.module.scss'

interface ChipCounterProps {
    category: Hints.HintCategory,
    value: number
}

const getChipText = (category: Hints.HintCategory): string => {
    switch (category) {
        case Hints.HintCategory.OUTPUT:
            return 'output'
        case Hints.HintCategory.EXIT_CODE:
            return 'exit code'
        case Hints.HintCategory.TIMEOUT:
            return 'timeout'
    }
}

const ChipCounter = ({category, value}: ChipCounterProps) => {

    const chipText: string = getChipText(category)

    return (
        <div className={styles.container} >

            <div className={styles.chip} >
                <Chip category={category} />
            </div>

            <span className={styles.text} >{value} {chipText}{value > 1 && 's'}</span>

        </div>
    )
}

export default ChipCounter
