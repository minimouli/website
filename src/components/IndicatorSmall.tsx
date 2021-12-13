/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from '../styles/IndicatorSmall.module.scss'

interface IndicatorSmallProps {
    value: number
}

const IndicatorSmall = ({value}: IndicatorSmallProps) => {

    const strokeDashoffsetValue: number = 100 - (value * 100)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox="-1 -1 34 34" >

            <circle
                className={styles.below}
                cx="16" cy="16" r="15.48" />

            <circle
                className={styles.above}
                cx="16" cy="16" r="15.48"
                strokeDashoffset={strokeDashoffsetValue} />

        </svg>
    )
}

export default IndicatorSmall
