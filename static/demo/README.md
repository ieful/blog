# 演示视频存放目录

将 .mp4 / .mov 演示视频放在这里，页面中通过 /demo/文件名 引用。
建议：.mov 若为 ProRes 等编码需转码为 H.264 .mp4 以保证浏览器兼容；
可用 ffmpeg 抽帧生成封面：ffmpeg -ss 1 -i input.mov -frames:v 1 -q:v 3 poster.jpg
