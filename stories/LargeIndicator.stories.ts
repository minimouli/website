/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LargeIndicator } from '../components/LargeIndicator'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LargeIndicator> = {
    title: 'LargeIndicator',
    component: LargeIndicator
}

type Story = StoryObj<typeof LargeIndicator>

const Step0: Story = {
    name: '0%',
    args: {
        value: 0
    }
}
const Step1: Story = {
    args: {
        value: 1 / 4
    }
}
const Step2: Story = {
    args: {
        value: 1 / 2
    }
}
const Step3: Story = {
    args: {
        value: 3 / 4
    }
}
const Step4: Story = {
    args: {
        value: 1
    }
}

export {
    Step0,
    Step1,
    Step2,
    Step3,
    Step4
}
export default meta
