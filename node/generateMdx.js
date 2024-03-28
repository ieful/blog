const fs = require('fs');
const path = require('path');

const sourceFolder = '/Users/wangxiaoyu/Allen/blog/static/audio/JJ';
const targetFolder = '/Users/wangxiaoyu/Allen/blog/docs/Me/songs/JJ';

function createMdxFile(fileName) {
    const mdxContent = `---
title: ${fileName}
tags: [Music]
---

<audio controls>
    <source src="/audio/JJ/${fileName}.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
</audio>
`;

    const targetFilePath = path.join(targetFolder, `${fileName}.mdx`);

    fs.writeFile(targetFilePath, mdxContent, err => {
        if (err) {
            console.error(`Error creating .mdx file for ${fileName}: ${err}`);
        } else {
            console.log(`Created ${fileName}.mdx successfully!`);
        }
    });
}

function traverseFolder(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${folderPath}: ${err}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Error reading file ${filePath}: ${err}`);
                    return;
                }

                if (stats.isDirectory()) {
                    traverseFolder(filePath);
                } else {
                    const fileName = path.parse(file).name;
                    createMdxFile(fileName);
                }
            });
        });
    });
}

traverseFolder(sourceFolder);
