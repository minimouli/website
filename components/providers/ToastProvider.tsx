/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import { Provider, Viewport } from '@radix-ui/react-toast'
import styles from './ToastProvider.module.scss'
import type { ReactNode } from 'react'

interface ToastProviderProps {
    children: ReactNode
}

const ToastProvider = ({ children }: ToastProviderProps) => (
    <Provider swipeDirection="right" >
        {children}
        <Viewport className={styles.viewport} />
    </Provider>
)

export {
    ToastProvider
}
