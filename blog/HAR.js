import React, {useEffect, useRef} from "react";
// import harflv from '/static/flv/har.flv';
// import flvjs from 'flv.js';

const HarDemo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        fetch('/video/HAR.mp4')
            .then(response => response.blob())
            .then(blob => {
                const blobURL = URL.createObjectURL(blob);
                videoRef.current.src = blobURL;
            })
    }, [])

    return <video ref={videoRef} width={700} controls src='/video/HAR.mp4' />;
}

export default HarDemo;