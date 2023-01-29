/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from 'next/link'
import styles from './DiscordInvitationButton.module.scss'
import { DiscordIcon } from './icons/DiscordIcon'

const DiscordInvitationButton = () => (
    <Link href="https://discord.gg/Ww8mpbx4M7" >
        <div className={styles.container} >
            <div className={styles.starWrapper} >
                <DiscordIcon className={styles.icon} />
            </div>
            <span>Go to the Discord</span>
        </div>
    </Link>
)

export {
    DiscordInvitationButton
}
