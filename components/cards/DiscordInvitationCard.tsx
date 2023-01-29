/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './DiscordInvitationCard.module.scss'
import { DiscordInvitationButton } from '../DiscordInvitationButton'

const DiscordInvitationCard = () => (
    <div className={styles.container} >
        <span>To see updates and get news, you can join the Minimouli Discord server</span>
        <DiscordInvitationButton />
    </div>
)

export {
    DiscordInvitationCard
}
