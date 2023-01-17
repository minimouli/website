/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Snippet.module.scss'
import { Toast } from './Toast'
import { ClipboardIcon } from './icons/ClipboardIcon'
import { Pressable } from './interactivity/Pressable'

interface SnippetProps {
    content: string
}

const Snippet = ({ content }: SnippetProps) => {

    const [open, setOpen] = useState(false)
    const timerRef = useRef(0)

    useEffect(() => () => clearTimeout(timerRef.current), [])

    const handleClick = () => {
        void navigator.clipboard.writeText(content).then(() => {
            setOpen(false)
            window.clearTimeout(timerRef.current)

            timerRef.current = window.setTimeout(() => {
                setOpen(true)
            }, 100)
        })
    }

    return (
        <div className={styles.snippet} >
            <span className={styles.content} >{content}</span>
            <Pressable onClick={handleClick} >
                <ClipboardIcon className={styles.icon} />
            </Pressable>

            <Toast open={open} onOpenChange={setOpen} title="Copied!" description="The command is now in your clipboard" />
        </div>
    )
}

export {
    Snippet
}
