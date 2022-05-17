// 对话
const QUESTIONS = [
  {
    type: "input",
    name: "title",
    message: "请输入模版的名称",
    validate: (value) => {
      if (value !== "") return true;
      return "请输入有效的模版名称!";
    },
  },
  {
    type: "list",
    name: "languageType",
    message: "请选择语言类型?",
    choices: ["js", "ts"],
  },
  {
    type: "list",
    name: "cssType",
    message: "请选择css处理器?",
    choices: ["scss", "sass", "less", "styles", "style-components"],
  },
];

module.exports = {
  QUESTIONS,
};
