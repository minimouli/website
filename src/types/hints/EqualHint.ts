/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Hint, { HintType, ObjectType } from './Hint'

type EqualHint = Hint<{
    type: HintType.EQUAL,
    received: {
        value: string,
        type: ObjectType
    },
    expected?: {
        value: string,
        type: ObjectType
    }
}>

export default EqualHint
