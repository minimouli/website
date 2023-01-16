/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintStatus, HintType } from '@minimouli/types/hints'
import { TimeoutHint } from '../../components/hints/TimeoutHint'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TimeoutHint> = {
    title: 'hints/TimeoutHint',
    component: TimeoutHint
}

type Story = StoryObj<typeof TimeoutHint>

const Default: Story = {
    args: {
        hint: {
            type: HintType.Timeout,
            status: HintStatus.Failure,
            message: 'The hint message',
            timeout: 2000
        }
    }
}

export {
    Default
}
export default meta
