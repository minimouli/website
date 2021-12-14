/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Hints } from '@minimouli/types'

interface HintTimeoutProp {
    hint: Hints.TimeoutHint
}

const HintTimeout = ({hint} : HintTimeoutProp) => {
    return (
        <h3 style={{marginBottom: '12px'}}>Timeout after {hint.timeout}ms</h3>
    )
}

export default HintTimeout
