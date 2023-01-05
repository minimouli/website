/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Snippet } from '../components/Snippet'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Snippet> = {
    title: 'Snippet',
    component: Snippet
}

type Story = StoryObj<typeof Snippet>

const Default: Story = {
    args: {
        content: 'echo "hello world"'
    }
}

export {
    Default
}
export default meta
