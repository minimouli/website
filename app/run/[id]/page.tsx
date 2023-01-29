/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Client } from '@minimouli/sdk'
import { notFound } from 'next/navigation'
import styles from './Run.module.scss'
import { Footer } from '../../../components/Footer'
import { RunHeader } from '../../../components/RunHeader'
import { DiscordInvitationCard } from '../../../components/cards/DiscordInvitationCard'
import { GitHubStarCard } from '../../../components/cards/GitHubStarCard'
import { RunInformationCard } from '../../../components/cards/RunInformationCard'
import { RunOverviewCard } from '../../../components/cards/RunOverviewCard'
import { SuiteCard } from '../../../components/cards/SuiteCard'
import { Container } from '../../../components/layouts/Container'
import { fromSuites, sort } from '../../../helpers/light-suite.helper'
import type { ProjectEntity, RunEntity } from '@minimouli/sdk'
import type { SuiteSynthesis } from '@minimouli/types/dist/syntheses'

interface RunProps {
    params: {
        id: string
    }
}

const Run = async ({ params }: RunProps) => {

    const client = new Client()

    let run: RunEntity
    let project: ProjectEntity

    try {
        run = await client.runs.get(params.id)
        const moulinette = await client.moulinettes.get(run.moulinette.id)
        project = await client.projects.get(moulinette.project?.id ?? '')
    } catch {
        notFound()
    }

    const organizationName = project.organization?.displayName ?? ''

    // @ts-expect-error Bad types in @minimouli/sdk
    const suites = sort(fromSuites(run.suites as SuiteSynthesis[]))
        .filter((suite) => suite.tests.length > 0)

    const cycle = `${project.cycle}-${(project.cycle + 1).toString().slice(2)}`

    return (
        <div className={styles.page} >
            <RunHeader
                title={project.displayName}
                caption={[organizationName, cycle].join(' / ')}
            />

            <main className={styles.main} >
                <Container>
                    <div className={styles.container} >
                        <DiscordInvitationCard />

                        <div className={styles.grid} >
                            <div className={styles.result} >
                                {suites.map((suite) => (
                                    <SuiteCard key={suite.path.join('/')} suite={suite} />
                                ))}
                            </div>

                            <div className={styles.general} >
                                <RunOverviewCard suites={suites} />
                                <GitHubStarCard />
                                <RunInformationCard run={run} />
                            </div>
                        </div>

                    </div>
                </Container>
            </main>

            <Footer />
        </div>
    )
}

export default Run
