import React, {useRef} from 'react';
import styles from './index.module.css'


const CssVariable = () => {
    const containerRef = useRef(null);

    const w = containerRef.current?.clientWidth;

    containerRef.current?.style.setProperty('--w', w + 'px');

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.ball}></div>
        </div>
    )
}

export default CssVariable;