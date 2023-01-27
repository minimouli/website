/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintCategory } from '@minimouli/types/hints'
import { CategoryChip } from '../components/CategoryChip'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CategoryChip> = {
    title: 'CategoryChip',
    component: CategoryChip
}

type Story = StoryObj<typeof CategoryChip>

const Output: Story = {
    args: {
        category: HintCategory.Output
    }
}
const ExitCode: Story = {
    args: {
        category: HintCategory.ExitCode
    }
}
const Timeout: Story = {
    args: {
        category: HintCategory.Timeout
    }
}

export {
    Output,
    ExitCode,
    Timeout
}
export default meta
