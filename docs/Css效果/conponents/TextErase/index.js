import React, {useEffect} from 'react';
import './index.css';


const TextErase = () => {

    return (
        <div className='my-container2'>
            <p>
                Rough.js is a small (9kB gzipped) graphics library that lets you draw in a sketchy, hand-drawn-like,
                style. The library defines primitives to draw lines, curves, arcs, polygons, circles, and ellipses. It
                also supports drawing SVG paths.

                Rough.js works with both Canvas and SVG.
            </p>
            <p className='my-eraser2'>
                <span className='my-text2'>
                    Rough.js is a small (9kB gzipped) graphics library that lets you draw in a sketchy, hand-drawn-like,
                style. The library defines primitives to draw lines, curves, arcs, polygons, circles, and ellipses. It
                also supports drawing SVG paths.

                Rough.js works with both Canvas and SVG.
                </span>
            </p>
        </div>
    )
}

export default TextErase;