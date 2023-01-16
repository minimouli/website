/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TestStatus } from '@minimouli/types/syntheses'
import { ComparisonSymbol, HintStatus, HintType, ObjectType } from '@minimouli/types/hints'
import { SuiteCard } from '../../components/cards/SuiteCard'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SuiteCard> = {
    title: 'cards/SuiteCard',
    component: SuiteCard
}

type Story = StoryObj<typeof SuiteCard>

const Default: Story = {
    args: {
        suite: {
            path: ['First', 'Second'],
            duration: 200,
            score: 0.2,
            tests: [
                {
                    name: 'Test #1',
                    status: TestStatus.Failure,
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
                    },
                    duration: 200
                },
                {
                    name: 'Test #2',
                    status: TestStatus.Success,
                    duration: 200
                },
                {
                    name: 'Test #3',
                    status: TestStatus.Success,
                    duration: 200
                },
                {
                    name: 'Test #4',
                    status: TestStatus.Failure,
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
                    },
                    duration: 200
                },
                {
                    name: 'Test #5',
                    status: TestStatus.Failure,
                    hint: {
                        type: HintType.Timeout,
                        status: HintStatus.Failure,
                        message: 'The hint message',
                        timeout: 2000
                    },
                    duration: 200
                }
            ]
        }
    }
}

export {
    Default
}
export default meta
