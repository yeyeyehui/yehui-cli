// 校验环境
const fse = require("fs-extra");

const path = require("path");

const { error } = require("../utils/chalk");

const checkContext = ({ title }) => {
  // 获取当前项目路径
  const curDir = path.resolve(".");

  const destDir = path.join(curDir, title);

  //是否已经存在
  if (fse.pathExistsSync(destDir)) {
    error(`${title}文件已经存在，创建失败！`);
    process.exit(1);
  }

  return {
    destDir,
  };
};

module.exports = {
  checkContext,
};
