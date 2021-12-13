import styles from '../../styles/HintItem.module.scss'
import { Hints } from '@minimouli/types'

interface HintStringDiffProp {
    hint: Hints.StringDiffHint
}

const HintStringdiff = ({hint} : HintStringDiffProp) => {
    console.log(hint);
    return (
        <div className={styles.container_hint}>
            <div className={styles.expect}>
                <h2>Expected:</h2>
                <h3>fesse</h3>
            </div>
            <div className={styles.received}>
                <h2>Received:</h2>
                <h3>fesse</h3>
            </div>
        </div>
    )
}

export default HintStringdiff
