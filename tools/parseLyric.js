function parseLyrics(lyricsString) {
    const lines = lyricsString.split('\n');
    console.log('lines:', lines);
    const result = {};

    lines.forEach(line => {
        const matches = line.match(/\[(\d{2}:\d{2}\.\d{2,3})\](.*)/);
        console.log('matches:', matches);
        if (matches && matches.length === 3) {
            const timestamp = matches[1];
            const lyric = matches[2].trim();
            result[`[${timestamp}]`] = lyric;
        }
    });
    return result;
}

module.exports = parseLyrics;

// const originalLyrics = "[00:47.480]雨都停了这片天灰什么呢\n[00:54.480]我还记得你说我们要快乐\n[01:01.160]深夜里的脚步声总是刺耳\n[01:06.370]害怕寂寞就让狂欢的城市陪我关灯\n[01:13.730]只是哪怕周围再多人感觉还是一个人\n[01:21.130]每当我笑了心却狠狠的哭着\n[01:26.810]\n[01:26.900]给我一个理由忘记那么爱我的你\n[01:34.500]给我一个理由放弃当时做的决定\n[01:41.800]有些爱越想抽离却越更清晰\n[01:45.640]那最痛的距离是你不在身边\n[01:51.600]却在我的心里\n[01:59.130]\n[02:12.690]当我走在去过的每个地方\n[02:20.099]总会听到你那最自由的笑\n[02:26.919]当我回到一个人住的地方\n[02:32.550]最怕看到冬天你最爱穿的那件外套\n[02:40.110]只是哪怕周围再多人感觉还是一个人\n[02:47.279]每当我笑了心却狠狠的哭着\n[02:53.139]\n[02:54.890]给我一个理由忘记那么爱我的你\n[03:01.390]给我一个理由放弃当时做的决定\n[03:08.839]有些爱越想抽离却越更清晰\n[03:13.359]那最痛的距离是你不在身边\n[03:18.959]却在我的心里\n[03:26.750]\n[03:45.060]我找不到理由忘记大雨里的别离\n[03:52.799]我找不到理由放弃我等你的决心\n[03:59.149]有些爱越想抽离却越更清晰\n[04:03.780]那最痛的距离是你不在身边\n[04:09.179]却在我的心里\n[04:26.800]我想你\n[04:31.600]\n";
//
// const result = parseLyrics(originalLyrics);
// console.log(result);