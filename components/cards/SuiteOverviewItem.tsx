/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './SuiteOverviewItem.module.scss'
import { SmallIndicator } from '../SmallIndicator'
import type { LightSuiteSynthesis } from '../../types/LightSuiteSynthesis'

interface SuiteOverviewItemProps {
    suite: LightSuiteSynthesis
}

const SuiteOverviewItem = ({ suite }: SuiteOverviewItemProps) => (
    <div className={styles.item} >
        <span className={styles.title} >{suite.path.join(' / ')}</span>
        <div className={styles.indication} >
            <span>{Math.round(suite.score * 100)}%</span>
            <SmallIndicator value={suite.score} />
        </div>
    </div>
)

export {
    SuiteOverviewItem
}
