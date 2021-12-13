/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactElement } from 'react'
import Divider from './Divider'
import IndicatorLarge from './IndicatorLarge'
import IndicatorSmall from './IndicatorSmall'
import LightSuiteSynthesis from '../types/syntheses/LightSuiteSynthesis'
import styles from '../styles/RunCard.module.scss'

type RunCardProp = {
    suites: LightSuiteSynthesis[],
}

const calcScore = (suites: LightSuiteSynthesis[]): number => {

    const total: number = suites.reduce<number>((previous: number, suite: LightSuiteSynthesis) => {
        return previous + suite.tests.length
    }, 0)

    const effective: number = suites.reduce<number>((previous: number, suite: LightSuiteSynthesis) => {
        return previous + (suite.score * suite.tests.length)
    }, 0)

    return effective / total
}

const RunCard = ({suites}: RunCardProp) => {

    const score: number = calcScore(suites)

    return (
        <section className={styles.container} >

            <div className={styles.head} >

                <div className={styles.headline} >
                    <h2>Suites</h2>
                </div>

                <div className={styles.indicator} >
                    <IndicatorLarge value={score} />
                </div>

            </div>

            <Divider />

            <div className={styles.suites} >
                {suites.map((suite: LightSuiteSynthesis, index: number) => (
                    <div key={index} className={styles.suite} >

                        <div className={styles.name} >
                            <span>{suite.name}</span>
                        </div>

                        <div className={styles.indicator} >
                            <span>{Math.round(suite.score * 100)}%</span>
                            <IndicatorSmall value={suite.score} />
                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default RunCard
