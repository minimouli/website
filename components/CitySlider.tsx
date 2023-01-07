/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './CitySlider.module.scss'

const CitySlider = () => {

    const cities = [
        'Marseille',
        'Paris',
        'Barcelona',
        'Caen'
    ]

    return (
        <div className={styles.container}>
            <span className={styles.slider}>
                {cities.map((city, index) => (
                    <span key={index}>{city}</span>
                ))}
                <span>{cities.at(0)}</span>
            </span>
        </div>
    )
}

export {
    CitySlider
}
