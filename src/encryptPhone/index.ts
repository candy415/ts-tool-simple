import changeString from "../changeString"
/**
 * @description: 加密手机号(中间四位数字使用星号替换)
 * @param {*} value 要加密的手机号
 * @return {*}      加密后的手机号
 */
 function encryptPhone (value:string):string {
  if (!value) return ''
  if (value.length === 11) {
    return changeString(value, 3, 6, '****')
  } else {
    return value
  }
}

export default encryptPhone