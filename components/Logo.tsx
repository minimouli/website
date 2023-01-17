/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

type LogoTheme = 'black' | 'dark' | 'white'

const ColorMap = {
    black: '#000000',
    dark: 'var(--background)',
    white: '#ffffff'
}

interface LogoProps {
    size?: number
    theme?: LogoTheme
}

const Logo = ({ size = 24, theme = 'white' }: LogoProps) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M256 98.6667V216C223.683 216 197.486 189.734 197.486 157.333V40C229.802 40 256 66.266 256 98.6667Z"
            fill={ColorMap[theme]}
        />
        <path
            d="M190.171 98.6667V216C157.855 216 131.657 189.734 131.657 157.333V40C163.974 40 190.171 66.266 190.171 98.6667Z"
            fill={ColorMap[theme]}
        />
        <path
            d="M124.343 98.6667V216C92.0263 216 65.8286 189.734 65.8286 157.333V40C98.1451 40 124.343 66.266 124.343 98.6667Z"
            fill={ColorMap[theme]}
        />
        <path
            d="M58.5143 98.6667H0C0 66.266 26.1977 40 58.5143 40V98.6667Z"
            fill={ColorMap[theme]}
        />
    </svg>
)

export {
    Logo
}
