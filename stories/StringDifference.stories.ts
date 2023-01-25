/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StringDifference } from '../components/StringDifference'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StringDifference> = {
    title: 'StringDifference',
    component: StringDifference
}

type Story = StoryObj<typeof StringDifference>

const Default: Story = {
    args: {
        oldArray: [
            'hello world',
            'bonjour le monde',
            'hola el mundo'
        ],
        newArray: [
            'hello world',
            'salut le monde',
            'hola el mundo'
        ]
    }
}

export {
    Default
}
export default meta
