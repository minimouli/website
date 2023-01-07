/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './Container.module.scss'
import type { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}

const Container = ({ children }: ContainerProps) => (
    <div className={styles.container} >
        <div>
            {children}
        </div>
    </div>
)

export {
    Container
}
