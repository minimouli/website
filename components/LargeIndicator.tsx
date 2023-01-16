/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './LargeIndicator.module.scss'

interface LargeIndicatorProps {
    value: number
}

const LargeIndicator = ({ value }: LargeIndicatorProps) => {

    /* Don't ever change the width */
    const width = 48
    const height = width * 0.875
    const strokeWidth = 3
    const rayon = (width / 2) - (strokeWidth / 2)
    const circumference = 2 * Math.PI * rayon

    const normalizedValue = Math.max(0, Math.min(value, 1))
    const displayedValue: number = Math.round(normalizedValue * 100)
    const calculatedValue = 1 - (0.75 * normalizedValue)
    const adjustment = normalizedValue * strokeWidth
    const strokeDashoffset = (circumference * calculatedValue) + adjustment

    return (
        <div className={styles.indicator} data-value={displayedValue} >
            <svg width={width} height={height} viewBox="10 10 48 42" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M18.0312 49.851C17.4454 50.4368 16.4917 50.4398 15.9437 49.8185C13.1466 46.6481 11.2306 42.7874 10.4023 38.6233C9.47623 33.9678 9.95151 29.1422 11.768 24.7567C13.5845 20.3713 16.6607 16.623 20.6074 13.9859C24.5542 11.3487 29.1944 9.94113 33.9411 9.94113C38.6879 9.94113 43.328 11.3487 47.2748 13.9859C51.2216 16.623 54.2977 20.3713 56.1142 24.7567C57.9307 29.1422 58.406 33.9678 57.48 38.6233C56.6517 42.7874 54.7356 46.6481 51.9386 49.8185C51.3905 50.4398 50.4368 50.4368 49.851 49.851C49.2652 49.2652 49.2698 48.3188 49.8123 47.6927C52.1927 44.9455 53.8251 41.62 54.5376 38.038C55.3479 33.9644 54.932 29.742 53.3426 25.9048C51.7532 22.0675 49.0615 18.7878 45.6081 16.4803C42.1547 14.1728 38.0945 12.9411 33.9411 12.9411C29.7877 12.9411 25.7276 14.1728 22.2741 16.4803C18.8207 18.7878 16.1291 22.0675 14.5397 25.9048C12.9502 29.742 12.5343 33.9644 13.3446 38.038C14.0571 41.62 15.6896 44.9455 18.0699 47.6927C18.6124 48.3188 18.617 49.2652 18.0312 49.851Z" />
                <circle
                    cx="34" cy="34"
                    r={rayon}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}

export {
    LargeIndicator
}
