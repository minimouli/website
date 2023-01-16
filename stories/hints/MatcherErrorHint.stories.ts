/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintStatus, HintType } from '@minimouli/types/hints'
import { MatcherErrorHint } from '../../components/hints/MatcherErrorHint'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MatcherErrorHint> = {
    title: 'hints/MatcherErrorHint',
    component: MatcherErrorHint
}

type Story = StoryObj<typeof MatcherErrorHint>

const Default: Story = {
    args: {
        hint: {
            type: HintType.MatcherError,
            status: HintStatus.Failure,
            message: 'The hint message',
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toBe'
            }
        }
    }
}

export {
    Default
}
export default meta
