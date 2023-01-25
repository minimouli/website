/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComparisonSymbol, HintStatus, HintType, ObjectType } from '@minimouli/types/hints'
import { TestStatus } from '@minimouli/types/syntheses'
import { Test } from '../components/Test'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Test> = {
    title: 'Test',
    component: Test
}

type Story = StoryObj<typeof Test>

const Success: Story = {
    args: {
        test: {
            name: 'Test name',
            status: TestStatus.Success,
            duration: 200
        }
    }
}
const FailureWithComparison: Story = {
    args: {
        test: {
            name: 'Test name',
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
        }
    }
}
const FailureWithEquality: Story = {
    args: {
        test: {
            name: 'Test name',
            status: TestStatus.Failure,
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
            },
            duration: 200
        }
    }
}
const FailureWithMatcherError: Story = {
    args: {
        test: {
            name: 'Test name',
            status: TestStatus.Failure,
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
            },
            duration: 200
        }
    }
}
const FailureWithMultilineStringDifference: Story = {
    args: {
        test: {
            name: 'Test name',
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
        }
    }
}
const FailureWithUnilineStringDifference: Story = {
    args: {
        test: {
            name: 'Test name',
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
                    value: ['hola el mundo'],
                    type: ObjectType.String
                }
            },
            duration: 200
        }
    }
}
const FailureWithStreamDifference: Story = {
    args: {
        test: {
            name: 'Test name',
            status: TestStatus.Failure,
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
            },
            duration: 200
        }
    }
}
const FailureWithTimeout: Story = {
    args: {
        test: {
            name: 'Test name',
            status: TestStatus.Failure,
            hint: {
                type: HintType.Timeout,
                status: HintStatus.Failure,
                message: 'The hint message',
                timeout: 2000
            },
            duration: 200
        }
    }
}

export {
    Success,
    FailureWithComparison,
    FailureWithEquality,
    FailureWithMatcherError,
    FailureWithMultilineStringDifference,
    FailureWithUnilineStringDifference,
    FailureWithStreamDifference,
    FailureWithTimeout
}
export default meta
