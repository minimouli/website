/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Header } from '../components/Header'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header
}

type Story = StoryObj<typeof Header>

const Default: Story = {}

export {
    Default
}
export default meta
