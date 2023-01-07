/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Home.module.scss'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { InstallSnippet } from '../components/InstallSnippet'
import { Window } from '../components/Window'
import { Container } from '../components/layouts/Container'

const Home = () => {

    const [isAnimated, setAnimation] = useState(false)
    const windowRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {

            const [entry] = entries

            if (entry.isIntersecting)
                setAnimation(true)
        }

        const window = windowRef.current

        if (window === null)
            return

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.25
        })
        observer.observe(window)

        return () => observer.unobserve(window)
    }, [])

    return (
        <div className={styles.page} >
            <Header />

            <main className={styles.main} >
                <Container>
                    <div className={styles.container} >

                        <div className={styles.hero} >
                            <div className={styles.texts} >
                                <h1 className={styles.title} >Get feedback on your projects without waiting for nao</h1>
                                <h2 className={styles.caption} >
                                    Minimouli offers the best toolchain of testing to help developers maintain the quality of their projects.
                                </h2>
                            </div>

                            <InstallSnippet />
                        </div>

                        <div className={styles.terminal} >
                            <div className={styles.window} ref={windowRef} >
                                <Window />
                            </div>

                            <div className={`${styles.ellipses} ${isAnimated ? styles.animated : ''}`} >
                                <div>
                                    <svg className={styles.blue} viewBox="0 0 902 504" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="451" cy="252" rx="451" ry="252" fillOpacity="0.7"/>
                                    </svg>
                                    <svg className={styles.red} viewBox="0 0 797 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="398.5" cy="249" rx="398.5" ry="249" fillOpacity="0.7"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default Home
