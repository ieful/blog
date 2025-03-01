const parseLyrics = require('../tools/parseLyric');


const sourceLyric = "[00:14.66]拼图一片片失落 像枫叶的冷漠\n[00:21.68]墙上的钟 默默数着寂寞\n[00:28.94]咖啡飘散过香味 剩苦涩陪着我\n[00:36.29]想念的心 埋葬我在深夜的脆弱\n[00:43.67]无尽的苍穹 满天的星座\n[00:47.69]你的光亮一闪而过\n[00:51.15]只想要记住这永恒的瞬间\n[00:56.46]\n[00:57.17]像流星的坠落 灿烂夺去了轮廓\n[01:05.62]这刹那过後 世界只是 回忆的沙漏\n[01:11.72]像流星的坠落 绚丽地点亮了整个星空\n[01:19.82]像你故事在我生命留下 不褪色的伤口\n[01:26.83]\n[01:29.24]湖水守候着沉默 等待天边的月\n[01:36.33]孤独的水面 却漆黑整夜\n[01:43.57]夜雾凝结的泪光 被蒸发在角落\n[01:51.11]他无情地 遗忘我在追忆的漩涡\n[01:58.05]无尽的苍穹 满天的星座\n[02:02.10]你的光亮 一闪而过\n[02:05.70]只想要记住这永恒的瞬间\n[02:11.40]\n[02:11.81]像流星的坠落 灿烂夺去了轮廓\n[02:20.22]这刹那过後 世界只是 回忆的沙漏\n[02:26.17]像流星的坠落 绚丽地点亮了整个星空\n[02:34.37]像你故事在我生命留下 不褪色的伤口\n[02:40.56]\n[02:41.91]在黑夜的尽头 是你的捉弄\n[02:45.61]和无声的伤痛\n[02:48.95]燃烧过後  只剩静默\n[02:56.69]\n[03:00.77]像流星的坠落 灿烂夺去了轮廓\n[03:09.21]这刹那过後 世界只是 回忆的沙漏\n[03:16.91]流星坠落 绚丽地点亮了整个星空\n[03:23.71]像你故事在我生命留下 不褪色的伤口\n[03:31.71]\n";

const parsedLyric = parseLyrics(sourceLyric);

console.log('parsedLyric:', parsedLyric);

module.exports = parsedLyric;