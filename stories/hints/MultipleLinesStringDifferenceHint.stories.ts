/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintCategory, HintStatus, HintType, ObjectType } from '@minimouli/types/hints'
import { MultipleLinesStringDifferenceHint } from '../../components/hints/MultipleLinesStringDifferenceHint'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MultipleLinesStringDifferenceHint> = {
    title: 'hints/MultipleLinesStringDifferenceHint',
    component: MultipleLinesStringDifferenceHint
}

type Story = StoryObj<typeof MultipleLinesStringDifferenceHint>

const Default: Story = {
    args: {
        hint: {
            type: HintType.StringDifference,
            status: HintStatus.Failure,
            message: 'The hint message',
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toOutput'
            },
            received: {
                value: ['hello world'],
                type: ObjectType.String
            },
            expected: {
                value: ['hola', 'el', 'mundo'],
                type: ObjectType.String
            }
        }
    }
}
const WithOutputCategory: Story = {
    args: {
        hint: {
            type: HintType.StringDifference,
            status: HintStatus.Failure,
            category: HintCategory.Output,
            message: 'The hint message',
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toOutput'
            },
            received: {
                value: ['hello world'],
                type: ObjectType.String
            },
            expected: {
                value: ['hola', 'el', 'mundo'],
                type: ObjectType.String
            }
        }
    }
}

export {
    Default,
    WithOutputCategory
}
export default meta
