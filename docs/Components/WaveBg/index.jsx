import React, {useEffect, useRef, useState} from 'react';


const WaveBg = (porps) => {
    const audioRef = useRef(null);
    const [audioStatus, setAudioStatus] = useState('pause');

    useEffect(() => {
        audioRef.current.addEventListener("play", function() {
            setAudioStatus('play');
        });
        audioRef.current.addEventListener("pause", function() {
            setAudioStatus('pause');
        });
        return () => Ve();
    }, []);

    useEffect(() => {
        if (audioStatus === 'play') {
            Ev();
        } else {
            Ve();
        }
    }, [audioStatus])

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
        <audio controls ref={audioRef}>
            <source src={porps.songPath} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    )
}

export default WaveBg;