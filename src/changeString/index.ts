/*
 * @Author: huwanfei
 * @Date: 2022-11-16 10:30:46
 * @LastEditTime: 2022-11-16 10:34:25
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /组件库/ts-tool-simple/src/changeString/index.ts
 */


/**
 * @description: 使用新字符串替换字符串中的一部分
 * @param {*} str         原字符串
 * @param {*} startIndex  开始位置
 * @param {*} endIndex    结束位置
 * @param {*} changeStr   要插入的字符串
 * @return {*}            替换后的字符串
 */
 function changeString (str:string, startIndex:number, endIndex:number, changeStr:string):string {
  if (!str) return ''
  return str.substring(0, startIndex) + changeStr + str.substring(endIndex + 1)
}

export default changeString