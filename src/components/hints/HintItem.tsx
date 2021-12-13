/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hints } from '@minimouli/types'
import styles from '../../styles/HintItem.module.scss'
import HintStringdiff from './HintStringdiff';
import HintTimeout from './HintTimeout'

interface HintItemProp {
    hint: Hints.Hint
}

interface HintChoiceProp {
    type: Hints.HintType,
    hint: Hints.Hint
}

const Hintchoice = ({type, hint} : HintChoiceProp) => {
    console.log(hint);
    switch (hint.type) {
        case Hints.HintType.TIMEOUT:
            return <HintTimeout hint={hint as Hints.TimeoutHint}/>
        case Hints.HintType.STRING_DIFF:
            return <HintStringdiff hint={hint as Hints.StringDiffHint} />
        default:
            return <h1></h1>
    }
}


const HintItem = ({hint} : HintItemProp) => {
    let error_hint = undefined;
    if (hint.snippet) {
        let received = hint.snippet.arguments.received.join(', ')
        let method = hint.snippet.method
        let expected = hint.snippet.arguments.expected.join(', ')
        error_hint = <h3>expect(<span style={{color: 'var(--failure)'}}>{received}</span>).<span style={{color: 'var(--text-primary)'}}>{method}</span>(<span style={{color: 'var(--success)'}}>{expected}</span>)</h3>
    }

    return (
        <div className={styles.container}>
            <h3><div>{error_hint}</div></h3>
            {hint.message && <h3>{hint.message}</h3>}
            <Hintchoice type={hint.type} hint={hint}/>
        </div>
    )
}

export default HintItem
