import React, {useEffect, useRef, useState} from 'react';
import './index.css';
// import {shuffle} from "@site/tools/shuffle";
import {linearGradientColors} from "./colors";

const WaveBg = (props) => {
    const audioRef = useRef(null);
    const lyricRef = useRef(null);
    const [audioStatus, setAudioStatus] = useState('pause');
    const [currentLyric, setCurrentLyric] = useState('');
    const [currentLyricColor, setCurrentLyricColor] = useState('(-20deg,#b721ff 0%, #21d4fd 100%)');

    let lyricsKeys = [];
    let currentIndex = 0;
    if (props.lyric) {
        lyricsKeys = Object.keys(props.lyric);
    }

    function handleTimeUpdate() {
        const currentTime = audioRef.current?.currentTime;
        const nextTime = audioRef.current?.duration;

        for (let i = currentIndex; i < lyricsKeys.length; i++) {
            const startTime = parseTime(lyricsKeys[i]);
            const endTime = i + 1 < lyricsKeys.length ? parseTime(lyricsKeys[i + 1]) : nextTime;

            if (currentTime >= startTime && currentTime < endTime) {
                currentIndex = i;
                setCurrentLyric(props.lyric[lyricsKeys[i]]);
                break;
            }
        }
    }

    useEffect(() => {
        fetch(`${props.songPath}`)
            .then(response => response.blob())
            .then(blob => {
                const blobURL = URL.createObjectURL(blob);
                audioRef.current.src = blobURL;
        })
    }, [])

    useEffect(() => {
        if (audioStatus === 'play') {
            Ev();
        } else {
            Ve();
        }
        return () => Ve();
    }, [audioStatus])


    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * linearGradientColors.length);
        setCurrentLyricColor(linearGradientColors[randomIndex]);
    }, [currentLyric]);

    function xv(t) {
        return Math.floor(Math.random() * t)
    };

    function Fv() {
        var t, e;
        const n = window.localStorage.getItem("isDark")
            , i = null === (e = null === (t = null === window || void 0 === window ? void 0 : window.matchMedia) || void 0 === t ? void 0 : t.call(window, "(prefers-color-scheme: dark)")) || void 0 === e ? void 0 : e.matches;
        return !n && i ? i : Boolean(Number(n))
    };

    function Av() {
        const t = xv(255)
            , e = xv(255)
            , n = xv(255);
        return `#${t.toString(16)}${e.toString(16)}${n.toString(16)}000`.slice(0, 7)
    };

    let Iv;

    function Ve() {
        let div = document.getElementById('random-light-bg');
        div && div.remove();
    }

    function Ev() {
        if (Fv())
            return;
        clearInterval(Iv);
        const t = document.createElement("div")
            , e = xv(360);
        t.id = "random-light-bg",
            t.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;z-index:-3;transition: 1s linear;",
            t.style.backgroundImage = `linear-gradient(${e}deg, ${Av()} 0%, ${Av()} 100%)`,
            document.body.appendChild(t),
            Iv = setInterval(function() {
                const n = `linear-gradient(${e}deg, ${Av()} 0%, ${Av()} 100%)`;
                t.style.opacity = ".3",
                    setTimeout(()=>{
                            t.style.backgroundImage = n,
                                t.style.opacity = "1"
                        }
                        , 1e3)
            }, 1e4)
    }


    return (
        <div className="audioWrapper">
            <audio
                ref={audioRef}
                controls
                src=''
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setAudioStatus('play')}
                onPause={() => setAudioStatus('pause')}>
            </audio>
            {
                props.lyric && (
                    <div ref={lyricRef}
                         className="currentLyric"
                         style={{backgroundImage: `linear-gradient${currentLyricColor}`}}>
                        {currentLyric}
                    </div>
                )
            }
        </div>
    )

    function parseTime(timeString) {
        const timeParts = timeString.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/);
        const minutes = parseInt(timeParts[1]);
        const seconds = parseInt(timeParts[2]);
        const milliseconds = parseInt(timeParts[3]);
        return minutes * 60 + seconds + milliseconds / 1000;
    }
}

export default WaveBg;