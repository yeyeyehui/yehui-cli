const shell = require("shelljs");

const path = require("path");

/**
 *
 * @param {String} destDir 目标文件路径
 * @param {Boolean} simple
 * @param {less,scss,sass,stylus} cssType
 * @return { sourceDir, destFile} 模版原文件，生成的目标文件
 */
const copyTemplate = ({ destDir }) => {
  const sourceDir = path.resolve(
    __dirname,
    "../../../packages/*"
  );

  // 创建文件夹
  shell.mkdir("-p", destDir);
  shell.cp("-R", sourceDir, destDir);
  return { sourceDir };
};

module.exports = copyTemplate;
