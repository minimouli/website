/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from '../styles/IndicatorLarge.module.scss'

interface IndicatorLargeProps {
    value: number
}

const IndicatorLarge = ({value}: IndicatorLargeProps) => {

    const strokeDashoffsetValue: number = 100 - (value * 100) * 0.75
    const displayValue: number = Math.round(value * 100)

    return (
        <div className={styles.container} data-value={displayValue} >
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox="-1 -1 34 34" >

                <circle
                    className={styles.below}
                    cx="16" cy="16" r="15.9155"
                    strokeDashoffset={25} />

                <circle
                    className={styles.above}
                    cx="16" cy="16" r="15.9155"
                    strokeDashoffset={strokeDashoffsetValue} />

            </svg>
        </div>
    )
}

export default IndicatorLarge
