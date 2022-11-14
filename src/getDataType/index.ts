/*
 * @Author: huwanfei
 * @Date: 2022-11-14 14:10:57
 * @LastEditTime: 2022-11-14 14:11:58
 * @LastEditors: huwanfei
 * @Description:  数据类型判断
 * @FilePath: /ts-tool-simple/src/getDataType/index.ts
 */
 function getDataType(target:any):string {
  const type:string = typeof target

  // 复杂数据类型
  if(type === 'object') {
    return Object.prototype.toString.call(target).replace(/^\[object (\S+)\]$/, '$1').toLowerCase()
  } else {
    // 基础数据类型直接返回
    return type
  }
}

export default getDataType