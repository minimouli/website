/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Hint, { HintCategory, HintType } from './Hint'

type StreamDiffHint = Hint<{
    type: HintType.STREAM_DIFF,
    category?: HintCategory.OUTPUT
}>

export default StreamDiffHint
