import React from 'react';
import './index.css';


const TextErase = () => {
    return (
        <div className='container'>
            <p>
                Rough.js is a small (9kB gzipped) graphics library that lets you draw in a sketchy, hand-drawn-like,
                style. The library defines primitives to draw lines, curves, arcs, polygons, circles, and ellipses. It
                also supports drawing SVG paths.

                Rough.js works with both Canvas and SVG.
            </p>
            <p className='eraser'>
                <span className='text'>
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