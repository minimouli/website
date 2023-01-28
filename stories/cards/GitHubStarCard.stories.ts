/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GitHubStarCard } from '../../components/cards/GitHubStarCard'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GitHubStarCard> = {
    title: 'cards/GitHubStarCard',
    component: GitHubStarCard
}

type Story = StoryObj<typeof GitHubStarCard>

const Default: Story = {}

export {
    Default
}
export default meta
