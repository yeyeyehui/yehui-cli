// 创建模版
const chalk = require("chalk");

const shell = require("shelljs");

const fs = require("fs-extra");

// 用户交互
const { askQuestions } = require('../../ask');

const { checkContext } = require('../../check-context');

const copyTemplate = require('../../copy-file/copy-template');

// 创建模版
const createTemplate = async () => {
    // 获取用户交互值
    const answers = await askQuestions()

    const { destDir } = checkContext({...answers})

    //复制模版到目标文件
    copyTemplate({ destDir });
    
    
};

module.exports = () => {
  try {
    createTemplate();
  } catch (error) {
    console.error(chalk.red(error));
    console.error(chalk.red(`创建模版失败!`));
  }
};
