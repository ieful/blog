import React, {useRef} from 'react';
// import './index.module.css'


const CssVariable = () => {
    const containerRef = useRef(null);

    const w = containerRef.current?.clientWidth;

    containerRef.current?.style.setProperty('--myw', w + 'px');

    return (
        <div className='container' ref={containerRef}>
            <div className='ball'></div>
        </div>
    )
}

export default CssVariable;