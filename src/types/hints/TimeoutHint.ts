/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as Unit from '../Unit'
import Hint, { HintCategory, HintType } from './Hint'

type TimeoutHint = Hint<{
    type: HintType.TIMEOUT,
    category?: HintCategory.TIMEOUT,
    timeout: Unit.ms
}>

export default TimeoutHint
