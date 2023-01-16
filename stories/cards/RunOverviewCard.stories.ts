/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TestStatus } from '@minimouli/types/syntheses'
import { RunOverviewCard } from '../../components/cards/RunOverviewCard'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RunOverviewCard> = {
    title: 'cards/RunOverviewCard',
    component: RunOverviewCard
}

type Story = StoryObj<typeof RunOverviewCard>

const Default: Story = {
    args: {
        suites: [
            {
                path: ['First'],
                duration: 200,
                score: 0.6,
                tests: [
                    {
                        name: 'Test #1',
                        status: TestStatus.Success,
                        duration: 200
                    },
                    {
                        name: 'Test #2',
                        status: TestStatus.Success,
                        duration: 200
                    },
                    {
                        name: 'Test #3',
                        status: TestStatus.Success,
                        duration: 200
                    },
                    {
                        name: 'Test #4',
                        status: TestStatus.Failure,
                        duration: 200
                    },
                    {
                        name: 'Test #5',
                        status: TestStatus.Failure,
                        duration: 200
                    }
                ]
            },
            {
                path: ['First', 'Second'],
                duration: 200,
                score: 0.2,
                tests: [
                    {
                        name: 'Test #1',
                        status: TestStatus.Success,
                        duration: 200
                    },
                    {
                        name: 'Test #2',
                        status: TestStatus.Failure,
                        duration: 200
                    },
                    {
                        name: 'Test #3',
                        status: TestStatus.Failure,
                        duration: 200
                    },
                    {
                        name: 'Test #4',
                        status: TestStatus.Failure,
                        duration: 200
                    },
                    {
                        name: 'Test #5',
                        status: TestStatus.Failure,
                        duration: 200
                    }
                ]
            }
        ]
    }
}

export {
    Default
}
export default meta
