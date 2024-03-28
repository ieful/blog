const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function copyMp3Files(sourceDir, targetDir) {
    try {
        // 读取源文件夹中的文件列表
        const files = await readdir(sourceDir);

        // 遍历文件列表
        for (const file of files) {
            const sourceFile = path.join(sourceDir, file);

            // 检查文件是否是以 .mp3 结尾的
            if (file.endsWith('.mp3') && file.includes('邓紫棋')) {
                // 提取新文件名
                const fileNameParts = file.split(' '); // 按空格拆分文件名
                const newFileName = fileNameParts[fileNameParts.length - 1]; // 取最后一段作为新文件名

                // 构建目标文件路径
                const targetFile = path.join(targetDir, newFileName);

                // 拷贝文件到目标文件夹
                await copyFile(sourceFile, targetFile);
                console.log(`Copied ${file} to ${targetDir} as ${newFileName}`);
            }
        }
        console.log('All .mp3 files copied successfully!');
    } catch (error) {
        console.error('Error copying files:', error);
    }
}

// 指定源文件夹和目标文件夹路径
const sourceFolder = '/Users/wangxiaoyu/Music/其他';
const targetFolder = '/Users/wangxiaoyu/Allen/blog/static/audio/G.E.M';

// 调用函数开始拷贝
copyMp3Files(sourceFolder, targetFolder);
