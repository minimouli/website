/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InstallSnippet } from '../components/InstallSnippet'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof InstallSnippet> = {
    title: 'InstallSnippet',
    component: InstallSnippet
}

type Story = StoryObj<typeof InstallSnippet>

const Npm: Story = {
    args: {
        initialPackageManager: 'npm'
    }
}

const Yarn: Story = {
    args: {
        initialPackageManager: 'yarn'
    }
}

export {
    Npm,
    Yarn
}
export default meta
