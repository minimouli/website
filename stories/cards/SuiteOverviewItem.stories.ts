/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SuiteOverviewItem } from '../../components/cards/SuiteOverviewItem'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SuiteOverviewItem> = {
    title: 'cards/SuiteOverviewItem',
    component: SuiteOverviewItem
}

type Story = StoryObj<typeof SuiteOverviewItem>

const Default: Story = {
    args: {
        suite: {
            path: ['First', 'Second'],
            duration: 200,
            score: 0.2,
            tests: []
        }
    }
}

export {
    Default
}
export default meta
