/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './RunInformationItem.module.scss'

interface RunInformationItemProps {
    title: string
    value: string
}

const RunInformationItem = ({ title, value }: RunInformationItemProps) => (
    <div className={styles.item} >
        <span className={styles.title} >{title}</span>
        <span className={styles.value} >{value}</span>
    </div>
)

export {
    RunInformationItem
}
