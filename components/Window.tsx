/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Image from 'next/image'
import styles from './Window.module.scss'

const Window = () => (
    <div className={styles.window} >
        <div className={styles.header} >
            <div className={styles.buttons} >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <circle cx="6" cy="6" r="6" fill="#482D44" />
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <circle cx="6" cy="6" r="6" fill="#482D44" />
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <circle cx="6" cy="6" r="6" fill="#482D44" />
                </svg>
            </div>
        </div>

        <div className={styles.body} >
            <Image src="/images/minimouli-run-session.svg" alt="Minimouli window session" fill />
        </div>
    </div>
)

export {
    Window
}
