/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import { useState } from 'react'
import styles from './InstallSnippet.module.scss'
import { Snippet } from './Snippet'

type PackageManager = 'npm' | 'yarn'

interface InstallSnippetProps {
    initialPackageManager?: PackageManager
}

const InstallSnippet = ({ initialPackageManager = 'npm' }: InstallSnippetProps) => {

    const commands = {
        npm: 'npm i -g minimouli',
        yarn: 'yarn global add minimouli'
    }

    const [selection, select] = useState<PackageManager>(initialPackageManager)

    const isNpmSelected = selection === 'npm'
    const isYarnSelected = selection === 'yarn'

    return (
        <div className={styles.container} >
            <div className={styles.head} >
                <div className={styles.snippet} >
                    <Snippet content={commands[selection]} />
                </div>
                <div className={styles.information} >
                    <span>v2.0.0</span>
                    <span>Node 12.20+</span>
                </div>
            </div>

            <div className={styles.bottom} >
                <span>Package manager</span>
                <div className={styles.items} >
                    <div className={isNpmSelected ? styles.active : ''} >
                        <span onClick={() => select('npm')} >Npm</span>
                    </div>
                    <div className={isYarnSelected ? styles.active : ''} >
                        <span onClick={() => select('yarn')} >Yarn</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    InstallSnippet
}
