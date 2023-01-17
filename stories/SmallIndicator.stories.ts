/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SmallIndicator } from '../components/SmallIndicator'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SmallIndicator> = {
    title: 'SmallIndicator',
    component: SmallIndicator
}

type Story = StoryObj<typeof SmallIndicator>

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
