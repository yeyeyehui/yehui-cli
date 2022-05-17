#!/usr/bin/env node

// 掘金文档
// https://juejin.cn/post/6844903702453551111
// https://juejin.cn/post/6857842033084760071

// 'use strict';
const chalk = require('chalk');

const currentNodeVersion = process.versions.node;
console.log(process)
if (currentNodeVersion.split('.')[0] < 16) {
  console.error(
    chalk.red(
      `您正在运行Node\n
      ${currentNodeVersion}\n
      yehui-cli要求节点16及以上。请更新您的Node版本`
    )
  );
  process.exit(1);
}

require('./init.js');
