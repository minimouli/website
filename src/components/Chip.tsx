/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hints } from '@minimouli/types'
import styles from '../styles/Chip.module.scss'

interface ChipProps {
    category: Hints.HintCategory
}

const getChipColor = (category: Hints.HintCategory): string => {
    switch (category) {
        case Hints.HintCategory.OUTPUT:
            return 'var(--output-color)'
        case Hints.HintCategory.EXIT_CODE:
            return 'var(--exit-code-color)'
        case Hints.HintCategory.TIMEOUT:
            return 'var(--timeout-color)'
    }
}

const Chip = ({category}: ChipProps) => {

    const chipColor: string = getChipColor(category)

    return (
        <div className={styles.container} >
            <svg viewBox="0 0 8 8" className={styles.svg} xmlns="http://www.w3.org/2000/svg">
                <circle
                    fill={chipColor}
                    cx="4" cy="4" r="4" />
            </svg>
        </div>
    )
}

export default Chip
