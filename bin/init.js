// 解析进程命令 https://juejin.cn/post/6959750919491682318
const { program } = require("commander");

// 设置脚手架的版本
program.version(require("../package.json").version);

program
  .command("create [name]")
  .description("创建模版")
  // .option("-s, --simple", "创建简单版的页面，只新增一个.vue文件")
  // .option("-t, --title <title>", "页面标题")
  .action(require('./commands/create'))

//格式化命令行参数
program.parse(process.argv);
