/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { DiscordInvitationButton } from '../components/DiscordInvitationButton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DiscordInvitationButton> = {
    title: 'DiscordInvitationButton',
    component: DiscordInvitationButton
}

type Story = StoryObj<typeof DiscordInvitationButton>

const Default: Story = {}

export {
    Default
}
export default meta
