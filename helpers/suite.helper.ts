/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TestStatus } from '@minimouli/types/syntheses'
import type { Unit } from '@minimouli/types'
import type { SuiteSynthesis } from '@minimouli/types/dist/syntheses'

const getDuration = (suite: SuiteSynthesis): Unit.ms => {

    let duration = 0

    for (const test of suite.tests)
        duration += test.duration

    for (const childSuite of suite.suites)
        duration += getDuration(childSuite)

    return duration
}

const getSuccessRatio = (suite: SuiteSynthesis): [number, number, number] => {

    let total = suite.tests.length
    let succeed = 0
    let failed = 0

    for (const test of suite.tests) {
        if (test.status === TestStatus.Success)
            succeed += 1
        if (test.status === TestStatus.Failure)
            failed += 1
    }

    for (const childSuite of suite.suites) {
        const [childTotal, childSucceed, childFailed] = getSuccessRatio(childSuite)
        total += childTotal
        succeed += childSucceed
        failed += childFailed
    }

    return [total, succeed, failed]
}

export {
    getDuration,
    getSuccessRatio
}
