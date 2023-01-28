/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface StarIconProps {
    className: string
}

const StarIcon = ({ className }: StarIconProps) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" >
        <path
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        />
    </svg>
)

export {
    StarIcon
}
