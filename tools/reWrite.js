// 正则匹配重写文件内容

const fs = require('fs');
const path = require('path');

const directoryPath = '/Users/wangxiaoyu/Allen/blog/docs/me/songs/A Lin'; // 修改为你的文件夹路径

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('无法读取文件夹内容: ' + err);
    }

    files.forEach(function (file) {
        if (file.endsWith('.mdx')) {
            const filePath = path.join(directoryPath, file);

            fs.readFile(filePath, 'utf-8', function (err, data) {
                if (err) {
                    return console.log('无法读取文件: ' + err);
                }

                // 使用正则表达式匹配并替换内容
                const audioSrcMatch = data.match(/<source src="(.+?)" type="audio\/mpeg" \/>/);
                if (!audioSrcMatch || audioSrcMatch.length < 2) {
                    console.log(`文件 ${file} 中未找到音频路径。`);
                    return;
                }

                const audioSrc = audioSrcMatch[1];

                // 执行替换操作
                const replacedContent = data.replace(/<audio controls>(.*?)<\/audio>/s, function (match, group) {
                    return `import WaveBg from "../../../Components/WaveBg";\n\n<WaveBg songPath="${audioSrc}"/>`;
                });

                // 将替换后的内容写回文件
                fs.writeFile(filePath, replacedContent, 'utf-8', function (err) {
                    if (err) {
                        return console.log('无法写入文件: ' + err);
                    }
                    console.log(`文件 ${file} 处理完成。`);
                });
            });
        }
    });
});
