/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Identity } from '../components/Identity'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Identity> = {
    title: 'Identity',
    component: Identity
}

type Story = StoryObj<typeof Identity>

const Default: Story = {}

export {
    Default
}
export default meta
