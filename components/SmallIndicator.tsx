/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './SmallIndicator.module.scss'

interface SmallIndicatorProps {
    value: number
}

const SmallIndicator = ({ value }: SmallIndicatorProps) => {

    /* Don't ever change the width */
    const width = 20
    const strokeWidth = 2
    const rayon = (width / 2) - (strokeWidth / 2)
    const circumference = 2 * Math.PI * rayon

    const normalizedValue = Math.max(0, Math.min(value, 1))
    const calculatedValue = 1 - normalizedValue
    const strokeDashoffset = circumference * calculatedValue

    return (
        <svg width={width} height={width} viewBox="0 0 20 20" fill="none" className={styles.indicator} xmlns="http://www.w3.org/2000/svg" >
            <path d="M20 10.0589C20 15.5817 15.5228 20.0589 10 20.0589C4.47715 20.0589 0 15.5817 0 10.0589C0 4.53602 4.47715 0.0588684 10 0.0588684C15.5228 0.0588684 20 4.53602 20 10.0589ZM1.992 10.0589C1.992 14.4816 5.5773 18.0669 10 18.0669C14.4227 18.0669 18.008 14.4816 18.008 10.0589C18.008 5.63617 14.4227 2.05087 10 2.05087C5.5773 2.05087 1.992 5.63617 1.992 10.0589Z" />
            <circle
                cx={width / 2}
                cy={width / 2}
                r={rayon}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap={normalizedValue < 1 ? 'round' : 'butt'}
            />
        </svg>
    )
}

export {
    SmallIndicator
}
