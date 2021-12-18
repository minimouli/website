/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ReactElement } from 'react'
import { Syntheses, Hints } from '@minimouli/types'
import Chip from './Chip'
import HintComp from './hints/HintComp'
import HintEqual from './hints/HintEqual'
import HintStreamDiff from './hints/HintStreamDiff'
import HintStringDiff from './hints/HintStringDiff'
import HintTimeout from './hints/HintTimeout'
import HintMatcherError from './hints/HintMatcherError'
import styles from '../styles/FailTest.module.scss'

interface FailTestProps {
    test: Syntheses.TestSynthesis
}

const getHint = (hint: Hints.Hint): ReactElement => {
    switch (hint.type) {
        case Hints.HintType.COMP:
            return <HintComp hint={hint as Hints.CompHint} />
        case Hints.HintType.EQUAL:
            return <HintEqual hint={hint as Hints.EqualHint} />
        case Hints.HintType.STREAM_DIFF:
            return <HintStreamDiff hint={hint as Hints.StreamDiffHint} />
        case Hints.HintType.STRING_DIFF:
            return <HintStringDiff hint={hint as Hints.StringDiffHint} />
        case Hints.HintType.TIMEOUT:
            return <HintTimeout hint={hint as Hints.TimeoutHint} />
        case Hints.HintType.MATCHER_ERROR:
            return <HintMatcherError hint={hint as Hints.MatcherErrorHint} />
    }
}

const FailTest = ({test}: FailTestProps) => {
    return (
        <div className={styles.container} >

            <div className={styles.headline} >
                <div className={styles.name} >

                    <span>{test.name}</span>

                    {test.hint?.category && (
                        <div className={styles.chip} >
                            <Chip category={test.hint.category}/>
                        </div>
                    )}

                </div>

                <div className={styles.status} >
                    <span>Failed</span>
                </div>
            </div>

            {test.hint && (
                <div className={styles.hint} >
                    {getHint(test.hint)}
                </div>
            )}

        </div>
    )
}

export default FailTest
