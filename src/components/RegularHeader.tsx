/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactNode, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Container from './Container'
import Divider from './Divider'
import styles from '../styles/RegularHeader.module.scss'

type RegularHeaderProps = {
    children: ReactNode[]
}

const RegularHeader = ({ children }: RegularHeaderProps) => {

    const [scrollY, setScrollY] = useState(0)
    const [dividerVisible, setDividerVisible] = useState(false)

    const handleScroll = useCallback((e) => {

        const window = e.currentTarget

        if (window.scrollY > 64) {
            setDividerVisible(true)
        } else {
            setDividerVisible(false)
        }

        setScrollY(window.scrollY)

    }, [scrollY])

    useEffect(() => {

        setScrollY(window.scrollY)

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [handleScroll])

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

                {dividerVisible && (
                    <Divider />
                )}

            </Container>
        </header>
    )
}

export default RegularHeader
