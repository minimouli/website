/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TestStatus } from '@minimouli/types/syntheses'
import { getDuration, getSuccessRatio as getSuiteSuccessRatio } from './suite.helper'
import type { SuiteSynthesis } from '@minimouli/types/dist/syntheses'
import type { LightSuiteSynthesis } from '../types/LightSuiteSynthesis'

const fromSuites = (suites: SuiteSynthesis[], pathPrefix: string[] = []): LightSuiteSynthesis[] => {

    const currentLightSuites = suites.map<LightSuiteSynthesis>((suite) => {

        const [total, succeed] = getSuiteSuccessRatio(suite)
        const duration = getDuration(suite)
        const score = total === 0 ? 0 : succeed / total

        return {
            path: [...pathPrefix, suite.name],
            duration,
            score,
            tests: suite.tests
        }
    })
    const childLightSuites = suites.flatMap((suite) => fromSuites(suite.suites, [...pathPrefix, suite.name]))

    return [...currentLightSuites, ...childLightSuites]
}

const getSuccessRatio = (suites: LightSuiteSynthesis[]): [number, number, number] => {

    let total = 0
    let succeed = 0
    let failed = 0

    for (const suite of suites) {

        total += suite.tests.length

        for (const test of suite.tests) {
            if (test.status === TestStatus.Success)
                succeed += 1
            if (test.status === TestStatus.Failure)
                failed += 1
        }
    }

    return [total, succeed, failed]
}

const sort = (lightSuites: LightSuiteSynthesis[]): LightSuiteSynthesis[] =>
    lightSuites.sort((firstSuite, secondSuite) => {

        const firstSuiteName = firstSuite.path.join('/')
        const secondSuiteName = secondSuite.path.join('/')

        return firstSuiteName.localeCompare(secondSuiteName)
    })

export {
    fromSuites,
    getSuccessRatio,
    sort
}
