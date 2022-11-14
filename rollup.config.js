/*
 * @Author: huwanfei
 * @Date: 2022-11-08 11:26:29
 * @LastEditTime: 2022-11-11 16:39:09
 * @LastEditors: huwanfei
 * @Description:  rollup打包
 * @FilePath: /ts-tool-simple/rollup.config.js
 */

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import pkg from './package.json' assert { type: 'json' }

export default [
  // UMD for browser-friendly build
  {
    input: 'src/index.ts',
    output: {
      name: 'utilTool',
			file: pkg.browser,
			format: 'umd'
    },
    plugins: [
      resolve(), // 查找和打包node_modules中的第三方模块
      commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
      typescript() // 解析TypeScript
    ]
  },
  // CommonJS for Node and ES module for bundlers build
  {
    input: 'src/index.ts',
    // 外部的
    external: ['ms'],
    plugins: [
      typescript()
    ],
    output: [
      {  file: pkg.main, format: 'cjs' },
      {  file: pkg.module, format: 'es' }
    ]
  }
]
