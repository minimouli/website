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

    const [selection, select] = useState<'npm' | 'yarn'>('npm')

    const handleCopy = () => {
        navigator.clipboard.writeText(commands[selection])
    }

    return (
        <div className={styles.container} >

            <div className={styles.snippet} >

                <span>{commands[selection]}</span>

                <svg width="19" height="22" onClick={handleCopy} viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M7.47369 5.28632H15.8947C17.0579 5.28632 18 6.24421 18 7.42842V18.8568C18 20.0421 17.0579 21 15.8947 21H7.47369C6.31053 21 5.36842 20.0411 5.36842 18.8568V7.42842M7.47369 5.28632C6.21489 5.32187 5.29333 6.2733 5.36842 7.42842M7.47369 5.28632H13.7895V3.14316C13.7895 1.95895 12.8474 1 11.6842 1H3.26316C2.1 1 1.1579 1.95789 1.1579 3.14316V14.5716C1.1579 15.7547 2.1 16.7147 3.26316 16.7147H5.36842V7.42842M7.47369 5.28632C6.13399 5.30622 5.37022 6.24532 5.36842 7.42842" stroke="#9297AA" strokeWidth="1.375" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>

            <div className={styles.list} >

                <span className={styles.choice} >Package manager:</span>

                <div className={styles.items} >

                    <div className={`${styles.item} ${selection === 'npm' ? styles.active : ''}`} onClick={() => select('npm')} >
                        <span>npm</span>
                    </div>

                    <div className={`${styles.item} ${selection === 'yarn' ? styles.active : ''}`} onClick={() => select('yarn')} >
                        <span>yarn</span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default InstallSnippet
