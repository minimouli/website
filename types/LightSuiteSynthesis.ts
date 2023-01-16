/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Unit } from '@minimouli/types'
import type { TestSynthesis } from '@minimouli/types/dist/syntheses'

interface LightSuiteSynthesis {
    path: string[]
    duration: Unit.ms
    score: number
    tests: TestSynthesis[]
}

export type {
    LightSuiteSynthesis
}
