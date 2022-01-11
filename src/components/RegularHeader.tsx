/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactNode } from 'react'
import Link from 'next/link'
import Container from './Container'
import Divider from './Divider'
import styles from '../styles/RegularHeader.module.scss'

type RegularHeaderProps = {
    children: ReactNode[]
}

const RegularHeader = ({ children }: RegularHeaderProps) => {
    return (
        <header className={styles.container} >
            <Container>

                <div className={styles.content} >

                    <div className={styles.left} >
                        <Link href="/" passHref >
                            <span className={styles.title} >Minimouli</span>
                        </Link>
                    </div>

                    <div className={styles.buttons} >
                        {children.map((child, index) => (
                            <div className={styles.button} key={index} >{child}</div>
                        ))}
                    </div>

                    <div className={styles.right} ></div>

                </div>

                <Divider />

            </Container>
        </header>
    )
}

export default RegularHeader
