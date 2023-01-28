/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './GitHubStarCard.module.scss'
import { GitHubStarButton } from '../GitHubStarButton'

const GitHubStarCard = () => (
    <div className={styles.container} >
        <span>If you find Minimouli useful, please consider giving a star on GitHub</span>
        <GitHubStarButton organization="minimouli" repository="minimouli" />
    </div>
)

export {
    GitHubStarCard
}
