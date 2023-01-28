/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GitHubStarButton } from '../components/GitHubStarButton'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GitHubStarButton> = {
    title: 'GitHubStarButton',
    component: GitHubStarButton
}

type Story = StoryObj<typeof GitHubStarButton>

const Default: Story = {
    args: {
        organization: 'minimouli',
        repository: 'minimouli'
    }
}

export {
    Default
}
export default meta
