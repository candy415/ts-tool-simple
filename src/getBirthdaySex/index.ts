/*
 * @Author: huwanfei
 * @Date: 2022-11-16 11:17:27
 * @LastEditTime: 2022-11-16 13:58:02
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /组件库/ts-tool-simple/src/getBirthdaySex/index.ts
 */
function getBirthdaySex (data:string):object {
  interface Provider {
    birthday?:string,
    sex?:string
  }
  const temp:Provider = {}

  // 判断身份证是否符合规则
  const cardReg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  if (!cardReg.test(data)) return {}

  // 获取出生日期
  temp.birthday = `${data.substring(6, 10)}-${data.substring(10, 12)}-${data.substring(12, 14)}`

  // 获取性别,'1'为男,‘2’为女
  temp.sex = parseInt(data.substring(16, 1)) % 2 === 1 ? '1' : '2'

  return temp
}

export default getBirthdaySex
