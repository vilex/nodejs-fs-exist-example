// Nodejs 判断目录是否存在

/**
  * 引入 nodejs 的文件管理 fs
  * 一般情况, require 都会放在最上面
  */

 const fs = require('fs')

 /**
  * 引入 path
  * 主要用来处理路径相关的问题
  */
 const path = require('path')


/**
 * 首先定义一个目录的路径
 * 看一下目录路径都可以怎么写
 */

 const dir1 = 'sync'
 // . 代表当前，当前目录下的sync
 const dir2 = './sync'
 // __dirname 是 nodejs 的一个全局变量，代表当前文件所在的目录
 const dir3 = __dirname + '/sync'
 // 使用 path.resolve 处理, path 会为我们识别为一个更标准的路径
 const dir4 = path.resolve(__dirname, 'sync')

 
/**
 * 判断目录是否存在的方法
 * 执行看一下结果
 * 创建一个 sync 目录
 * 再执行看一下结果
 */

 // 这个是异步判断的方式
//  fs.exists(dir1, exist => {
//    if (exist) {
//     console.log(`${dir1} 目录存在`)
//    } else {
//     console.log(`${dir1} 目录不存在`)
//    }
//  })

 // 同步判断的方式
 // 执行看一下效果
 // 关于什么是同步和异步，就不在这里说了
let exist = fs.existsSync(dir4)
if (exist) {
  console.log(`${dir4} 目录存在`)
} else {
  console.log(`${dir4} 目录不存在`)
}


// 到此，就结束了。
// 很简单的技术，但也有需要我们关注的知识点
// 1. 什么是同步，什么是异步
// 2. nodejs 中的路径不同的写法

