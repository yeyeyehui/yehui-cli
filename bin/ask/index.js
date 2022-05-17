// 命令行对话 http://www.wmm20.com/posts/8e3b15ee.html#%E6%80%8E%E4%B9%88%E7%94%A8
const inquirer = require("inquirer");

const { QUESTIONS } = require("./constant");

const askQuestions = () => {
  return inquirer.prompt(QUESTIONS);
};

module.exports = {
  askQuestions,
};
