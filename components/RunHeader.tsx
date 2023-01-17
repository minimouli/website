/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './RunHeader.module.scss'
import { Container } from './layouts/Container'

interface RunHeaderProps {
    title: string
    caption: string
}

const RunHeader = ({ title, caption }: RunHeaderProps) => (
    <header className={styles.header} >
        <Container>
            <div className={styles.container} >
                <div className={styles.headline} >
                    <div className={styles.titles} >
                        <span className={styles.title} >{title}</span>
                        <span className={styles.caption} >{caption}</span>
                    </div>
                </div>
            </div>
        </Container>
    </header>
)

export {
    RunHeader
}
