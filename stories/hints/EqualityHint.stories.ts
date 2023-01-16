/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintCategory, HintStatus, HintType, ObjectType } from '@minimouli/types/hints'
import { EqualityHint } from '../../components/hints/EqualityHint'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EqualityHint> = {
    title: 'hints/EqualityHint',
    component: EqualityHint
}

type Story = StoryObj<typeof EqualityHint>

const Default: Story = {
    args: {
        hint: {
            type: HintType.Equality,
            status: HintStatus.Failure,
            message: 'The hint message',
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toBe'
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
const WithOutputCategory: Story = {
    args: {
        hint: {
            type: HintType.Equality,
            status: HintStatus.Failure,
            category: HintCategory.Output,
            message: 'The hint message',
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toBe'
            },
            received: {
                value: 'hello',
                type: ObjectType.String
            },
            expected: {
                value: 'bonjour',
                type: ObjectType.String
            }
        }
    }
}
const WithExitCodeCategory: Story = {
    args: {
        hint: {
            type: HintType.Equality,
            status: HintStatus.Failure,
            category: HintCategory.ExitCode,
            message: 'The hint message',
            snippet: {
                arguments: {
                    received: ['received'],
                    expected: ['expected']
                },
                method: 'toBe'
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
    WithOutputCategory,
    WithExitCodeCategory
}
export default meta
