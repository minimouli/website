/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from 'next/link'
import styles from './Footer.module.scss'
import { Identity } from './Identity'
import { MadeWithLove } from './MadeWithLove'
import { DiscordIcon } from './icons/DiscordIcon'
import { GithubIcon } from './icons/GithubIcon'
import { Container } from './layouts/Container'

const Footer = () => (
    <footer className={styles.footer} >
        <Container>
            <div className={styles.container} >
                <div className={styles.navigation} >
                    <Link href="/" >
                        <Identity />
                    </Link>
                </div>

                <div className={styles.bottom} >
                    <div className={styles.icons} >
                        <Link href="https://github.com/minimouli" >
                            <GithubIcon className={styles.icon} />
                        </Link>
                        <Link href="https://discord.gg/Ww8mpbx4M7" >
                            <DiscordIcon className={styles.icon} />
                        </Link>
                    </div>
                    <MadeWithLove />
                </div>
            </div>
        </Container>
    </footer>
)

export {
    Footer
}
