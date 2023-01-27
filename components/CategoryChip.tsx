/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HintCategory } from '@minimouli/types/hints'

interface CategoryChipProps {
    category: HintCategory
}

const getCategoryColor = (category: HintCategory) => {
    switch (category) {
        case HintCategory.Output: {
            return 'var(--color-output)'
        }
        case HintCategory.ExitCode: {
            return 'var(--color-exit-code)'
        }
        case HintCategory.Timeout: {
            return 'var(--color-timeout)'
        }
        default: {
            return 'white'
        }
    }
}

const CategoryChip = ({ category }: CategoryChipProps) => (
    <svg width="8" height="9" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="4" cy="4" r="4" fill={getCategoryColor(category)} />
    </svg>
)

export {
    CategoryChip
}
