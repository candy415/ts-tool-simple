/**
 * @description 验证手机号
 * @param value
 * @returns {boolean}
 */
 export function isPhone (value:string):boolean {
  const reg = /^1[3,4,5,6,7,8,9]\d{9}$/
  return reg.test(value)
}

/**
 * @description 校验密码
 * @param value
 * @returns {boolean}
 */
export function ispassWord1 (value:string):boolean {
  // 新密码需要满足 字母、数字组合，长度为8-50
  const reg = /^(?=.*\d)(?=.*[a-zA-Z]).{8,50}$/
  return reg.test(value)
}

/**
 * @description 校验密码
 * @param value
 * @returns {boolean}
 */
export function ispassWord2 (value:string):boolean {
  // 需要满足字母、数字、特殊字符组合, 长度为8-12
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,12}/
  return reg.test(value)
}

/**
 * @description 校验验证码格式
 * @param value
 * @returns {boolean}
 */
export function isCode (value:string):boolean {
  const reg = /^\d{6}$/
  return reg.test(value)
}

/**
 * @description 校验邮箱格式
 * @param value
 * @returns {boolean}
 */
export function isEmail (value:string):boolean {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
  return reg.test(value)
}

/**
 * @description 校验身份证号格式
 * @param value
 * @returns {boolean}
 */
export function isCard (value:string):boolean {
  const reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(value)
}

/**
 * @description 校验用户名格式
 * @param value
 * @returns {boolean}
 */
export function isName (value:string):boolean {
  // 只能是中英文
  const reg = /^[a-zA-Z\u4e00-\u9fa5]+$/
  return reg.test(value)
}

/**
 * @description 校验手机号、电话号码格式
 * @param value
 * @returns {boolean}
 */
export function isMobileOrPhone (value:string):boolean {
  const mobile = /^1[3456789]\d{9}$/
  const phone = /^0\d{2,3}-?\d{7,8}$/
  const isReg = mobile.test(value) || phone.test(value)
  return isReg
}

/**
 * @description: 验证经度 整数部分为0-180小数部分为0到6位
 * @param {*} value
 * @return {*}
 */
export function isLongitude (value:string):boolean {
  // eslint-disable-next-line no-useless-escape
  const longreg = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/
  return longreg.test(value)
}

/**
 * @description: 验证维度 整数部分为0-90小数部分为0到6位
 * @param {*} value
 * @return {*}
 */
export function isLatitude (value:string):boolean {
  // eslint-disable-next-line no-useless-escape
  const latreg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/
  return latreg.test(value)
}
