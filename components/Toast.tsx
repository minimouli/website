/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Description, Root, Title } from '@radix-ui/react-toast'
import styles from './Toast.module.scss'
import type { Dispatch, SetStateAction } from 'react'

interface ToastProps {
    open: boolean
    onOpenChange: Dispatch<SetStateAction<boolean>>
    title: string
    description: string
}

const Toast = ({ open, onOpenChange, title, description }: ToastProps) => (
    <Root open={open} onOpenChange={onOpenChange} className={styles.root} >
        <Title className={styles.title} >{title}</Title>
        <Description className={styles.description} >{description}</Description>
    </Root>
)

export {
    Toast
}
