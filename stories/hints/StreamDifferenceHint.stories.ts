/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintStatus, HintType } from '@minimouli/types/hints'
import { StreamDifferenceHint } from '../../components/hints/StreamDifferenceHint'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StreamDifferenceHint> = {
    title: 'hints/StreamDifferenceHint',
    component: StreamDifferenceHint
}

type Story = StoryObj<typeof StreamDifferenceHint>

const Default: Story = {
    args: {
        hint: {
            type: HintType.StreamDifference,
            status: HintStatus.Failure,
            message: 'The hint message',
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toOutput'
            }
        }
    }
}

export {
    Default
}
export default meta
