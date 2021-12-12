/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import TestSynthesis from './TestSynthesis'

type SuiteSynthesis = {
    name: string,
    suites: SuiteSynthesis[],
    tests: TestSynthesis[]
}

export default SuiteSynthesis
