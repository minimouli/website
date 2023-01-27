/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './RunOverviewCard.module.scss'
import { SuiteOverviewItem } from './SuiteOverviewItem'
import { LargeIndicator } from '../LargeIndicator'
import { SuitesRadarChart } from '../SuitesRadarChart'
import { getSuccessRatio } from '../../helpers/light-suite.helper'
import type { LightSuiteSynthesis } from '../../types/LightSuiteSynthesis'

interface RunOverviewCardProps {
    suites: LightSuiteSynthesis[]
}

const RunOverviewCard = ({ suites }: RunOverviewCardProps) => {

    const [total, succeed] = getSuccessRatio(suites)
    const score = total === 0 ? 0 : succeed / total

    return (
        <section className={styles.card} >
            <div className={styles.head} >
                <span>Suites</span>
                <LargeIndicator value={score} />
            </div>

            <div className={styles.chart} >
                <SuitesRadarChart suites={suites} />
            </div>

            <div className={styles.body} >
                {suites.map((suite) => (
                    <SuiteOverviewItem key={suite.path.join('/')} suite={suite} />
                ))}
            </div>
        </section>
    )
}

export {
    RunOverviewCard
}
