
/**
 * @description: 使用base64加密字符串
 * @param {*} str 要加密的字符串
 * @return {*}    加密后的字符串
 */
 function encodeBase64 (str:string):string {
  if (!str) return ''
  const str64 = window.btoa(str)
  return str64
}
export default encodeBase64
