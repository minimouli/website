/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComparisonSymbol, HintCategory, HintStatus, HintType, ObjectType } from '@minimouli/types/hints'
import { ComparisonHint } from '../../components/hints/ComparisonHint'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ComparisonHint> = {
    title: 'hints/ComparisonHint',
    component: ComparisonHint
}

type Story = StoryObj<typeof ComparisonHint>

const Default: Story = {
    args: {
        hint: {
            type: HintType.Comparison,
            status: HintStatus.Failure,
            message: 'The hint message',
            symbol: ComparisonSymbol.LessThan,
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toBeLessThan'
            },
            received: {
                value: '0',
                type: ObjectType.Number
            },
            expected: {
                value: '84',
                type: ObjectType.Number
            }
        }
    }
}
const WithExitCodeCategory: Story = {
    args: {
        hint: {
            type: HintType.Comparison,
            status: HintStatus.Failure,
            category: HintCategory.ExitCode,
            message: 'The hint message',
            symbol: ComparisonSymbol.LessThan,
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toBeLessThan'
            },
            received: {
                value: '0',
                type: ObjectType.Number
            },
            expected: {
                value: '84',
                type: ObjectType.Number
            }
        }
    }
}

export {
    Default,
    WithExitCodeCategory
}
export default meta
