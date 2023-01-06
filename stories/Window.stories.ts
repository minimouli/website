/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Window } from '../components/Window'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Window> = {
    title: 'Window',
    component: Window
}

type Story = StoryObj<typeof Window>

const Default: Story = {}

export {
    Default
}
export default meta
