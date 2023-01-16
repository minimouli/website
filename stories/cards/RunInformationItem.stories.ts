/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { RunInformationItem } from '../../components/cards/RunInformationItem'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RunInformationItem> = {
    title: 'cards/RunInformationItem',
    component: RunInformationItem
}

type Story = StoryObj<typeof RunInformationItem>

const Default: Story = {
    args: {
        title: 'Timestamp',
        value: '16 January 2023, 13:37'
    }
}

export {
    Default
}
export default meta
