#!/user/bin/env node

"use strict";

const fs = require("fs");

var consoleLogString;
// console.log(process.env.path);

// 1、 path.basename() 根据给定的路径字符串和可选的拓展名字符串，返回路径的最后一部分

consoleLogString = path.basename("/internals/learn/start.js", ".js");

// 2、 path.delimiter  提供平台指定的路径界定符 window一般为 ';' 分号符

// console.log(process.env.PATH.split(path.delimiter));
consoleLogString = path.delimiter;

// 3、 path.dirname()  根据给定的路径字符串返回路径的目录名

consoleLogString = path.dirname("/internals/learn/start.js");

// 4、 path.extname() 根据给定的路径字符串，返回文件的拓展名。如果路径不包含文件只有目录则返回空字符串

consoleLogString = path.extname("/internals/learn");

// 5、 path.format() 根据给定的pathObject，返回路径字符串

consoleLogString = path.format({
  dir: "/internals/learn",
  base: "start.js",
  name: "start",
  ext: ".js",
});

// 6、 path.isAbsolute() 根据给定的路径字符串，判断路径是否为绝对路径

consoleLogString = path.isAbsolute("/internals/learn/start.js");

// 7、 path.join() 根据给定的路径片段序列，返回规范化的生成的路径。首先将给定的路径片段序列拼接，再规范化后返回

consoleLogString = path.join("/internals/learn/start.js");

// 8、 path.normalize 根据给定的路径字符串，返回规范化后的路径

consoleLogString = path.normalize("/internals/learn/start.js/abc");

// 9、 path.parse()  根据给定的路径字符串，返回一个有效的path对象

consoleLogString = path.parse("/internals/learn/start.js");

// 10、path.posix 该属性提供对path方法的特定实现的访问

// 11、 path.relative() 根据当前工作目录返回form到to的相对路径。如果相同则返回零长度的字符串

consoleLogString = path.relative(
  "/internals/learn/start.js",
  "/internals/start.js"
);

// 12、 path.resolve()  根据路径字符串或者路径片段的序列，返回解析的绝对路径 。如果没有传入path，则返回当前工作目录的绝对路径

consoleLogString = path.resolve();

// 13、 path.sep 提供平台特定的路径片段分隔符

consoleLogString = path.sep;

// 14、 path.toNamespacedPath() 根据给定的路径字符串，返回等效'名称空间前缀路径'

consoleLogString = path.toNamespacedPath("/internals/learn/start.js");

// 15、path.win32  属性提供对特定于windows的path方法的实现的访问

consoleLogString = path.win32;

console.log(consoleLogString);
