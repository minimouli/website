/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import { diffArrays } from 'diff'
import { useEffect, useRef, useState } from 'react'
import { Toast } from './Toast'
import styles from './StringDifference.module.scss'
import { ClipboardIcon } from './icons/ClipboardIcon'
import { Pressable } from './interactivity/Pressable'
import type { ArrayChange } from 'diff'

interface StringDifferenceProps {
    oldArray: string[]
    newArray: string[]
}

enum LineStatus {
    Unchanged = 'unchanged',
    Added = 'added',
    Removed = 'removed'
}

type Line = [string, LineStatus]

const getStatus = (change: ArrayChange<string>): LineStatus => {

    const isUnchanged = change.added === undefined && change.removed === undefined
    const isRemoved = !isUnchanged && change.removed === true
    const isAdded = !isUnchanged && change.added === true

    if (isRemoved)
        return LineStatus.Removed

    if (isAdded)
        return LineStatus.Added

    return LineStatus.Unchanged
}


const StringDifference = ({ oldArray, newArray }: StringDifferenceProps) => {

    const timerRef = useRef(0)
    const [open, setOpen] = useState(false)
    const [lines, setLines] = useState<Line[]>([])

    useEffect(() => {
        const changes = diffArrays(oldArray, newArray)
        const changeLines = changes.flatMap((change) => change.value.map((line): Line => [line, getStatus(change)]))
        setLines(changeLines)
    }, [oldArray, newArray])


    useEffect(() => () => clearTimeout(timerRef.current), [])

    const handleCopy = (content: string) => {
        void navigator.clipboard.writeText(content).then(() => {
            setOpen(false)
            window.clearTimeout(timerRef.current)

            timerRef.current = window.setTimeout(() => {
                setOpen(true)
            }, 100)
        })
    }

    const handleExpectedClick = () => handleCopy(oldArray.join('\n'))
    const handleReceivedClick = () => handleCopy(newArray.join('\n'))

    return (
        <table className={styles.container} >
            <thead>
                <tr>
                    <td></td>
                    <td>
                        <div className={styles.header} >
                            <span className={styles.title} >Expected:</span>
                            <Pressable onClick={handleExpectedClick} >
                                <ClipboardIcon className={styles.icon} />
                            </Pressable>
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className={styles.header} >
                            <span className={styles.title} >Received:</span>
                            <Pressable onClick={handleReceivedClick} >
                                <ClipboardIcon className={styles.icon} />
                            </Pressable>
                        </div>
                    </td>
                </tr>
            </thead>
            <tbody>
                {lines.map(([line, status], index) => (
                    <tr key={index} >
                        <td>{status === LineStatus.Added ? '' : index}</td>
                        <td>
                            <span className={status === LineStatus.Removed ? styles.removed : ''} >
                                {status !== LineStatus.Added && (
                                    <span>
                                        {line}
                                        <span className={styles.indication} >
                                            {index === lines.length - 1 ? '$' : '↵'}
                                        </span>
                                    </span>
                                )}
                            </span>
                        </td>
                        <td>{status === LineStatus.Removed ? '' : index}</td>
                        <td>
                            <span className={status === LineStatus.Added ? styles.added : ''} >
                                {status !== LineStatus.Removed && (
                                    <span>
                                        {line}
                                        <span className={styles.indication} >
                                            {index === lines.length - 1 ? '$' : '↵'}
                                        </span>
                                    </span>
                                )}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
            <Toast open={open} onOpenChange={setOpen} title="Copied!" description="The output is now in your clipboard" />
        </table>
    )
}

export {
    StringDifference
}
