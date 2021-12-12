/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Hint, { HintCategory, HintType, ObjectType } from './Hint'

type StringDiffHint = Hint<{
    type: HintType.STRING_DIFF,
    category?: HintCategory.OUTPUT,
    received: {
        value: string[],
        type: ObjectType.STRING
    },
    expected: {
        value: string[],
        type: ObjectType.STRING
    }
}>

export default StringDiffHint
