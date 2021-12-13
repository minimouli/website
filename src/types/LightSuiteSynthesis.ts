/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Syntheses, Unit} from '@minimouli/types'

type LightSuiteSynthesis = {
    name: string,
    duration: Unit.ms,
    score: number,
    tests: Syntheses.TestSynthesis[]
}

export default LightSuiteSynthesis
