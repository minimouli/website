/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from '../styles/Container.module.scss'

const Container = ({children}) => {
    return (
        <div className={styles.container} >
            <div className={styles.content} >
                {children}
            </div>
        </div>
    )
}

export default Container
