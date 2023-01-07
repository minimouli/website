/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './Identity.module.scss'
import { Logo } from './Logo'

const Identity = () => (
    <div className={styles.identity} >
        <Logo size={28} />
        <span>Minimouli</span>
    </div>
)

export {
    Identity
}
