/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CitySlider } from './CitySlider'
import styles from './MadeWithLove.module.scss'
import { HeartIcon } from './icons/HeartIcon'

const MadeWithLove = () => (
    <div className={styles.container} >
        <span>Made with</span>
        <HeartIcon className={styles.icon} />
        <span>in</span>
        <CitySlider />
    </div>
)

export {
    MadeWithLove
}
