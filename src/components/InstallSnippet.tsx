/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react'
import styles from '../styles/InstallSnippet.module.scss'

const InstallSnippet = () => {

    const commands = {
        npm: 'npm i -g minimouli',
        yarn: 'yarn global add minimouli'
    }

    const [selection, select] = useState('npm')

    return (
        <div className={styles.container} >

            <div className={styles.snippet} >
                <span>{commands[selection]}</span>
            </div>

            <div className={styles.list} >

                <span className={styles.choice} >Package manager:</span>

                <div className={styles.items} >

                    <div className={`${styles.item} ${selection === 'npm' ? styles.active : ''}`} onClick={() => select('npm')} >
                        <span>npm</span>
                    </div>

                    <vl />

                    <div className={`${styles.item} ${selection === 'yarn' ? styles.active : ''}`} onClick={() => select('yarn')} >
                        <span>yarn</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default InstallSnippet
