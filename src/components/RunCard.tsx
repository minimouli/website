/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactElement } from 'react'
import Divider from './Divider'
import LightSuiteSynthesis from '../types/syntheses/LightSuiteSynthesis'
import styles from '../styles/RunCard.module.scss'

type RunCardProp = {
    suites: LightSuiteSynthesis[],
}

const RunCard = ({suites}: RunCardProp) => {
    return (
        <section className={styles.container} >

            <div className={styles.head} >
                <div className={styles.headline} >
                    <h2>Suites</h2>
                </div>
            </div>

            <Divider />

            <div className={styles.suites} >
                {suites.map((suite: LightSuiteSynthesis, index: number) => (
                    <div key={index} className={styles.suite} >

                        <div className={styles.name} >
                            <span>{suite.name}</span>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default RunCard
