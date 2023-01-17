/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RunInformationCard } from '../../components/cards/RunInformationCard'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RunInformationCard> = {
    title: 'cards/RunInformationCard',
    component: RunInformationCard
}

type Story = StoryObj<typeof RunInformationCard>

const Default: Story = {
    args: {
        run: {
            id: 'SxpQ1CkYGjq91gs3',
            suites: {
                name: '',
                tests: [],
                suites: []
            },
            moulinette: {
                id: 'QO4uUfFC2j1546aK',
                repository: new URL('https://test.com'),
                isOfficial: true,
                use: 123,
                project: undefined,
                sources: undefined,
                maintainers: undefined,
                uri: 'minimouli:moulinette:QO4uUfFC2j1546aK',
                updatedAt: new Date('2023-01-15 22:15:24.640643'),
                createdAt: new Date('2023-01-15 22:15:24.640643')
            },
            moulinetteVersion: '1.0.0',
            owner: undefined,
            uri: 'minimouli:run:SxpQ1CkYGjq91gs3',
            updatedAt: new Date('2023-01-15 22:15:24.640643'),
            createdAt: new Date('2023-01-15 22:15:24.640643')
        }
    }
}

export {
    Default
}
export default meta
