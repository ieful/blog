import React, {useEffect, useRef} from 'react';
import './index.css'


const CssVariable = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const w = containerRef.current?.clientWidth;

        containerRef.current?.style.setProperty('--myw', w + 'px');

    }, [])

    return (
        <div className='my-container' ref={containerRef}>
            <div className='my-ball'></div>
        </div>
    )
}

export default CssVariable;