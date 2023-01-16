/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintSnippet } from '../components/HintSnippet'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HintSnippet> = {
    title: 'HintSnippet',
    component: HintSnippet
}

type Story = StoryObj<typeof HintSnippet>

const Default: Story = {
    name: 'HintSnippet',
    args: {
        snippet: {
            arguments: {
                received: ['received'],
                expected: ['expected', 'options']
            },
            method: 'toBe'
        }
    }
}

export {
    Default
}
export default meta
