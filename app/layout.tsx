/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './globals.scss'
import { Barlow, JetBrains_Mono } from '@next/font/google'
import type { ReactNode } from 'react'

const barlow = Barlow({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '500', '600', '700']
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    weight: '200'
})

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
    <html lang="en" >
        <head />
        <body className={`${barlow.variable} ${jetbrainsMono.variable}`} >
            {children}
        </body>
    </html>
)

export default RootLayout
