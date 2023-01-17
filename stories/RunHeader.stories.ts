/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RunHeader } from '../components/RunHeader'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RunHeader> = {
    title: 'RunHeader',
    component: RunHeader
}

type Story = StoryObj<typeof RunHeader>

const Default: Story = {
    args: {
        title: 'BSQ',
        caption: 'school / 2022'
    }
}

export {
    Default
}
export default meta
