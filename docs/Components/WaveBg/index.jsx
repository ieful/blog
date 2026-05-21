import React, {useEffect, useRef, useState} from 'react';
import './index.css';
// import {shuffle} from "@site/tools/shuffle";
import {linearGradientColors} from "./colors";

let analyser;
let buffer;

const WaveBg = (props) => {
    const audioRef = useRef(null);
    const lyricRef = useRef(null);
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);
    const audioContextRef = useRef(null);
    const isInitRef = useRef(false);
    const [audioStatus, setAudioStatus] = useState('pause');
    const [currentLyric, setCurrentLyric] = useState('');
    const [currentLyricColor, setCurrentLyricColor] = useState('(-20deg,#b721ff 0%, #21d4fd 100%)');


    useEffect(() => {
        if (canvasRef.current) {
            resizeCanvas();
            draw(new Array(128).fill(0), 255);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            stopVisualizer();
        };
    }, [])

    // useEffect(() => {
    //     fetch(`${props.songPath}`)
    //         .then(response => response.blob())
    //         .then(blob => {
    //             const blobURL = URL.createObjectURL(blob);
    //             audioRef.current.src = blobURL;
    //         }).catch(err => {
    //         console.log('blobURL转换失败', err)
    //     })
    // }, [])

    useEffect(() => {
        if (audioStatus === 'play') {
            Ev();
            startVisualizer();
        } else {
            Ve();
            stopVisualizer();
            draw(new Array(128).fill(0), 255);
        }
        return () => {
            Ve();
            stopVisualizer();
        };
    }, [audioStatus])

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * linearGradientColors.length);
        setCurrentLyricColor(linearGradientColors[randomIndex]);
    }, [currentLyric]);

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

    function handleResize() {
        resizeCanvas();
        draw(new Array(128).fill(0), 255);
    }

    function resizeCanvas() {
        if (!canvasRef.current) {
            return;
        }

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        const width = Math.max(Math.floor(rect.width * ratio), 1);
        const height = Math.max(Math.floor(rect.height * ratio), 1);

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
        }
    }

    function draw(datas, maxValue) {
        if (!canvasRef.current) {
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const ratio = window.devicePixelRatio || 1;
        const centerY = height / 2;
        const bandHeight = height * 0.78;
        const barGap = 2 * ratio;
        const barWidth = Math.max(width / datas.length - barGap, 2 * ratio);

        ctx.clearRect(0, 0, width, height);

        const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
        bgGradient.addColorStop(0, 'rgba(37, 194, 160, 0)');
        bgGradient.addColorStop(0.5, 'rgba(37, 194, 160, 0.12)');
        bgGradient.addColorStop(1, 'rgba(37, 194, 160, 0)');
        ctx.fillStyle = bgGradient;
        ctx.fillRect(0, 0, width, height);

        const lineGradient = ctx.createLinearGradient(0, 0, width, 0);
        lineGradient.addColorStop(0, '#25c2a0');
        lineGradient.addColorStop(0.5, '#7c3aed');
        lineGradient.addColorStop(1, '#f97316');

        ctx.fillStyle = lineGradient;
        ctx.shadowColor = 'rgba(37, 194, 160, 0.4)';
        ctx.shadowBlur = 10 * ratio;

        for (let i = 0; i < datas.length; i++) {
            const normalized = Math.min(datas[i] / maxValue, 1);
            const barHeight = Math.max(normalized * bandHeight, 2 * ratio);
            const x = i * (barWidth + barGap);
            const y = centerY - barHeight / 2;

            ctx.beginPath();
            roundRect(ctx, x, y, barWidth, barHeight, barWidth / 2);
            ctx.fill();
        }
    }

    function roundRect(ctx, x, y, width, height, radius) {
        const safeRadius = Math.min(radius, width / 2, height / 2);

        ctx.moveTo(x + safeRadius, y);
        ctx.lineTo(x + width - safeRadius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
        ctx.lineTo(x + width, y + height - safeRadius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
        ctx.lineTo(x + safeRadius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
        ctx.lineTo(x, y + safeRadius);
        ctx.quadraticCurveTo(x, y, x + safeRadius, y);
    }

    function xv(t) {
        return Math.floor(Math.random() * t) // 返回随机生成的整数
    };

    // 确定当前页面是否处于暗色模式
    // 通过 prefers-color-scheme: dark 媒体查询可以检测用户的系统是否处于暗色模式
    function Fv() {
        let t, e;
        const n = window.localStorage.getItem("isDark")
            , i = null === (e = null === (t = null === window || void 0 === window ? void 0 : window.matchMedia) || void 0 === t ? void 0 : t.call(window, "(prefers-color-scheme: dark)")) || void 0 === e ? void 0 : e.matches;
        return !n && i ? i : Boolean(Number(n))
    };

    // 用于生成一个随机的十六进制颜色
    // 使用 xv(255) 三次生成三个 0 到 255 之间的随机整数，表示红、绿、蓝分量。
    // 将这三个整数转换为十六进制字符串，并拼接为一个 RGB 颜色字符串。
    // 返回格式为 #RRGGBB 的随机颜色值。
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
        // if (Fv()) {
        //     // 暗色模式不执行
        //     return;
        // }
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


    function startVisualizer() {
        if (animationFrameRef.current) {
            return;
        }

        update();
    }

    function stopVisualizer() {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
    }

    function update() {
        if(!isInitRef.current) {
            animationFrameRef.current = null;
            return;
        }

        analyser.getByteFrequencyData(buffer);
        const offset = Math.floor(buffer.length * 0.82);
        const datas = Array.from(buffer.slice(0, offset));

        draw(datas, 255);
        animationFrameRef.current = requestAnimationFrame(update);
    }

    function handleAudioPause() {
        setAudioStatus('pause');
    }

    function handleAudioPlay() {
        setAudioStatus('play');
        if (isInitRef.current) {
            audioContextRef.current?.resume?.();
            return;
        }
        // 创建音频上下文
        const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContextCtor();
        const source = audioCtx.createMediaElementSource(audioRef.current);

        // 音频数据分析器
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 512;
        buffer = new Uint8Array(analyser.frequencyBinCount);

        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        audioContextRef.current = audioCtx;
        isInitRef.current = true;
    }


    return (
        <div className="audioWrapper">
            <audio
                ref={audioRef}
                controls
                src={props.songPath}
                onTimeUpdate={handleTimeUpdate}
                onPlay={handleAudioPlay}
                onPause={handleAudioPause}>
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
            <div className="audioWaveBand">
                <canvas ref={canvasRef} id='canvas' className="audioWaveCanvas"></canvas>
            </div>
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
