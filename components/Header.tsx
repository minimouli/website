/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container } from './layouts/Container'
import styles from './Header.module.scss'
import { Identity } from './Identity'

const Header = () => {

    const [scrollY, setScrollY] = useState(typeof window === 'undefined' ? 0 : window.scrollY)
    const [isDividerVisible, setDividerVisibility] = useState(scrollY > 64)

    useEffect(() => {
        setDividerVisibility(scrollY > 64)
    }, [scrollY])

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={styles.header} >
            <Container>
                <div className={`${styles.container} ${isDividerVisible ? styles.withDivider : ''}`} >
                    <Link href="/" >
                        <Identity />
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export {
    Header
}
