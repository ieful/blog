import React, {useRef} from "react";

import styles from './Hroll.module.css';

function Hroll( props ) {
    const HrollRef = useRef();

    function handleAnimationPause() {
        HrollRef.current.style.animationPlayState = 'paused';
    }

    function handleAnimationRun() {
        HrollRef.current.style.animationPlayState = 'running';
    }

    return (
        <div className={styles.wrapper} onMouseOver={handleAnimationPause} onMouseLeave={handleAnimationRun}>
            <div className={styles.imgContent} ref={HrollRef}>
                <img src={props.img} />
                <img src={props.img} />
            </div>
        </div>
    )
}

export { Hroll }