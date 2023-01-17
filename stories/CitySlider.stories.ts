/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CitySlider } from '../components/CitySlider'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CitySlider> = {
    title: 'CitySlider',
    component: CitySlider
}

type Story = StoryObj<typeof CitySlider>

const Default: Story = {}

export {
    Default
}
export default meta
