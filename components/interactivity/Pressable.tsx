/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import styles from './Pressable.module.scss'
import type { ReactNode } from 'react'

interface PressableProps {
    onClick: () => void
    children: ReactNode
}

const Pressable = ({ onClick, children }: PressableProps) => (
    <span
        className={styles.pressable}
        onClick={onClick}
    >
        {children}
    </span>
)

export {
    Pressable
}
