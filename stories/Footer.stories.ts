/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Footer } from '../components/Footer'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Footer> = {
    title: 'Footer',
    component: Footer
}

type Story = StoryObj<typeof Footer>

const Default: Story = {}

export {
    Default
}
export default meta
