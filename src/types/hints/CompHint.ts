/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Hint, { HintType, ObjectType } from './Hint'

enum CompSymbol {
    LESS_THAN = '<',
    LESS_THAN_OR_EQUAL = '<=',
    GREATER_THAN = '>',
    GREATER_THAN_OR_EQUAL = '>='
}

type CompHint = Hint<{
    type: HintType.COMP,
    symbol: CompSymbol,
    received: {
        value: string,
        type: ObjectType.NUMBER
    },
    expected: {
        value: string,
        type: ObjectType.NUMBER
    }
}>

export default CompHint
export {
    CompSymbol
}
