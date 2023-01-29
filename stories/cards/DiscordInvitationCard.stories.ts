/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DiscordInvitationCard } from '../../components/cards/DiscordInvitationCard'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DiscordInvitationCard> = {
    title: 'cards/DiscordInvitationCard',
    component: DiscordInvitationCard
}

type Story = StoryObj<typeof DiscordInvitationCard>

const Default: Story = {}

export {
    Default
}
export default meta
