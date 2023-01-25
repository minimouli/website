/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import { diffArrays } from 'diff'
import { useEffect, useState } from 'react'
import styles from './StringDifference.module.scss'
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

    const [lines, setLines] = useState<Line[]>([])

    useEffect(() => {
        const changes = diffArrays(oldArray, newArray)
        const changeLines = changes.flatMap((change) => change.value.map((line): Line => [line, getStatus(change)]))
        setLines(changeLines)
    }, [oldArray, newArray])

    return (
        <table className={styles.container} >
            <thead>
                <tr>
                    <td></td>
                    <td>Expected:</td>
                    <td></td>
                    <td>Received:</td>
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
        </table>
    )
}

export {
    StringDifference
}
