/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './RunInformationCard.module.scss'
import { RunInformationItem } from './RunInformationItem'
import { format } from '../../helpers/date.helper'
import type { RunEntity } from '@minimouli/sdk'

interface RunInformationCard {
    run: RunEntity
}

const RunInformationCard = ({ run }: RunInformationCard) => (
    <section className={styles.card} >
        <div className={styles.head} >
            <span>Information</span>
        </div>

        <div className={styles.body} >
            <RunInformationItem title="Run id" value={run.id} />
            <RunInformationItem title="Moulinette" value={`${run.moulinette.id}@${run.moulinetteVersion}`} />
            <RunInformationItem title="Timestamp" value={format(run.createdAt)} />
        </div>
    </section>
)

export {
    RunInformationCard
}
