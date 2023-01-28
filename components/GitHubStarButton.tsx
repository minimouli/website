/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './GitHubStarButton.module.scss'
import { StarIcon } from './icons/StarIcon'

interface GitHubStarButtonProps {
    organization: string
    repository: string
}

const GitHubStarButton = ({ organization, repository }: GitHubStarButtonProps) => {

    const [stars, setStars] = useState(0)

    useEffect(() => {

        void fetch(`https://api.github.com/repos/${organization}/${repository}`)
            .then((response) => response.json())
            .then((response) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                setStars(response.stargazers_count)
            })

    }, [organization, repository])

    return (
        <Link href={`https://github.com/${organization}/${repository}`} >
            <div className={styles.container} >
                <div className={styles.starWrapper} >
                    <StarIcon className={styles.icon} />
                </div>
                <span>Star</span>
                <div className={styles.count} >
                    <span>{stars}</span>
                </div>
            </div>
        </Link>
    )
}

export {
    GitHubStarButton
}
