import React, {useEffect, useMemo, useRef, useState} from 'react';
import '../WaveBg/index.css';
import './style.css';
import {linearGradientColors} from '../WaveBg/colors';

const EMPTY_BARS = new Array(96).fill(0);

const BottomBarSpectrum = (props) => {
    const audioRef = useRef(null);
    const canvasRef = useRef(null);
    const analyserRef = useRef(null);
    const bufferRef = useRef(null);
    const audioContextRef = useRef(null);
    const animationFrameRef = useRef(null);
    const isInitRef = useRef(false);
    const lyricKeysRef = useRef([]);
    const lyricIndexRef = useRef(0);
    const [currentLyric, setCurrentLyric] = useState('');
    const [currentLyricColor, setCurrentLyricColor] = useState('(-20deg,#b721ff 0%, #21d4fd 100%)');

    const lyricKeys = useMemo(() => {
        return props.lyric ? Object.keys(props.lyric) : [];
    }, [props.lyric]);

    useEffect(() => {
        lyricKeysRef.current = lyricKeys;
        lyricIndexRef.current = 0;
    }, [lyricKeys]);

    useEffect(() => {
        resizeCanvas();
        draw(EMPTY_BARS);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            stopVisualizer();
        };
    }, []);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * linearGradientColors.length);
        setCurrentLyricColor(linearGradientColors[randomIndex]);
    }, [currentLyric]);

    function handleResize() {
        resizeCanvas();
        draw(EMPTY_BARS);
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

    function draw(datas) {
        if (!canvasRef.current) {
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const ratio = window.devicePixelRatio || 1;
        const baseline = height - 8 * ratio;
        const maxBarHeight = height * 0.96;
        const gap = 3 * ratio;
        const barWidth = Math.max(width / datas.length - gap, 2 * ratio);

        ctx.clearRect(0, 0, width, height);

        const barGradient = ctx.createLinearGradient(0, 0, 0, height);
        barGradient.addColorStop(0, '#f97316');
        barGradient.addColorStop(0.45, '#7c3aed');
        barGradient.addColorStop(1, '#25c2a0');

        ctx.fillStyle = barGradient;
        ctx.shadowColor = 'rgba(124, 58, 237, 0.5)';
        ctx.shadowBlur = 8 * ratio;

        datas.forEach((value, index) => {
            const normalized = Math.min(value / 255, 1);
            const boosted = Math.pow(normalized, 0.72);
            const barHeight = Math.max(boosted * maxBarHeight, 3 * ratio);
            const x = index * (barWidth + gap);
            const y = baseline - barHeight;

            ctx.beginPath();
            roundedTopRect(ctx, x, y, barWidth, barHeight, Math.min(barWidth / 2, 5 * ratio));
            ctx.fill();
        });
    }

    function roundedTopRect(ctx, x, y, width, height, radius) {
        const safeRadius = Math.min(radius, width / 2, height);

        ctx.moveTo(x, y + height);
        ctx.lineTo(x, y + safeRadius);
        ctx.quadraticCurveTo(x, y, x + safeRadius, y);
        ctx.lineTo(x + width - safeRadius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
        ctx.lineTo(x + width, y + height);
        ctx.closePath();
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
        const analyser = analyserRef.current;
        const buffer = bufferRef.current;

        if (!analyser || !buffer) {
            animationFrameRef.current = null;
            return;
        }

        analyser.getByteFrequencyData(buffer);
        const limit = Math.floor(buffer.length * 0.75);
        const sampleSize = Math.min(96, limit);
        const step = Math.max(Math.floor(limit / sampleSize), 1);
        const datas = [];

        for (let i = 0; i < sampleSize; i++) {
            datas.push(buffer[i * step]);
        }

        draw(datas);
        animationFrameRef.current = requestAnimationFrame(update);
    }

    function handleAudioPlay() {
        if (isInitRef.current) {
            audioContextRef.current?.resume?.();
            startVisualizer();
            return;
        }

        const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContextCtor();
        const source = audioCtx.createMediaElementSource(audioRef.current);
        const analyser = audioCtx.createAnalyser();

        analyser.fftSize = 512;
        bufferRef.current = new Uint8Array(analyser.frequencyBinCount);
        analyserRef.current = analyser;

        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        audioContextRef.current = audioCtx;
        isInitRef.current = true;
        startVisualizer();
    }

    function handleAudioPause() {
        stopVisualizer();
        draw(EMPTY_BARS);
    }

    function handleTimeUpdate() {
        if (!props.lyric) {
            return;
        }

        const currentTime = audioRef.current?.currentTime;
        const duration = audioRef.current?.duration;
        const keys = lyricKeysRef.current;

        for (let i = lyricIndexRef.current; i < keys.length; i++) {
            const startTime = parseTime(keys[i]);
            const endTime = i + 1 < keys.length ? parseTime(keys[i + 1]) : duration;

            if (currentTime >= startTime && currentTime < endTime) {
                lyricIndexRef.current = i;
                setCurrentLyric(props.lyric[keys[i]]);
                break;
            }
        }
    }

    function parseTime(timeString) {
        const timeParts = timeString.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/);
        const minutes = parseInt(timeParts[1]);
        const seconds = parseInt(timeParts[2]);
        const milliseconds = parseInt(timeParts[3]);

        return minutes * 60 + seconds + milliseconds / 1000;
    }

    return (
        <div className="audioWrapper bottomBarSpectrumWrapper">
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
                    <div
                        className="currentLyric"
                        style={{backgroundImage: `linear-gradient${currentLyricColor}`}}>
                        {currentLyric}
                    </div>
                )
            }
            <div className="bottomBarSpectrum">
                <canvas ref={canvasRef} className="bottomBarSpectrumCanvas"></canvas>
            </div>
        </div>
    );
};

export default BottomBarSpectrum;
