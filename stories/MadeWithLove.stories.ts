/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MadeWithLove } from '../components/MadeWithLove'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MadeWithLove> = {
    title: 'MadeWithLove',
    component: MadeWithLove
}

type Story = StoryObj<typeof MadeWithLove>

const Default: Story = {}

export {
    Default
}
export default meta
