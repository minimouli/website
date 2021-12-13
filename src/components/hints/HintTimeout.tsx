import styles from '../../styles/HintItem.module.scss'
import { Hints } from '@minimouli/types'

interface HintTimeoutProp {
    hint: Hints.TimeoutHint
}

const HintTimeout = ({hint} : HintTimeoutProp) => {
    return (
        <h3>Timeout after {hint.timeout}ms</h3>
    )
}

export default HintTimeout
