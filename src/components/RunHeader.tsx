/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Container from './Container'
import Divider from './Divider'
import styles from '../styles/RunHeader.module.scss'

type RunHeaderProp = {
    projectName: string,
    moduleCode: string
}

const RunHeader = ({projectName, moduleCode}: RunHeaderProp) => {
    return (
        <header className={styles.container} >
            <Container>

                <div className={styles.headline} >
                    <div className={styles.titles} >
                        <h1>{projectName}</h1>
                        <span>{moduleCode}</span>
                    </div>
                </div>

                <Divider />

            </Container>
        </header>
    )
}

export default RunHeader
