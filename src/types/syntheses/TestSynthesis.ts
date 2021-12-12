/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as Unit from '../Unit'
import { Hint } from '../hints'

enum TestStatus {
    SUCCESS = 'Status.SUCCESS',
    FAILURE = 'Status.FAILURE'
}

type TestSynthesis = {
    name: string,
    status: TestStatus,
    duration: Unit.ms,
    hint?: Hint
}

export default TestSynthesis
export {
    TestStatus
}
