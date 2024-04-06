import React from "react";
// import harflv from '/static/flv/har.flv';
// import flvjs from 'flv.js';

const HarDemo = () => {

    // const flvurl = URL.createObjectURL(harflv);

    // let flvPlayer = flvjs.createPlayer({
    //     type: 'flv',
    //     url: ''
    // })

    return (
        <video controls width="700" src="/video/HAR.mp4" />
    )
}

export default HarDemo;