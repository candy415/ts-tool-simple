/*
 * @Author: huwanfei
 * @Date: 2022-11-08 11:15:42
 * @LastEditTime: 2022-11-16 16:04:12
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /组件库/ts-tool-simple/src/index.ts
 */
import urlGetParam from './urlGetParam/index'
import getDataType from './getDataType'
import changeString from './changeString'
import encodeBase64 from './encodeBase64'
import encryptPhone from './encryptPhone'
import getBirthdaySex from './getBirthdaySex'
import { setCache, getCache, removeCache, removeAll } from './session';
import { isPhone, ispassWord1, ispassWord2, isCode, isEmail, isCard, isName, isMobileOrPhone, isLongitude, isLatitude } from './validate';
import addObjectToArray from './addObjectToArray'
import { recursionRouter, convert } from './filterRouterData'

export {
  urlGetParam,
  getDataType,
  changeString,
  encodeBase64,
  encryptPhone,
  getBirthdaySex,
  setCache, getCache, removeCache, removeAll,
  isPhone, ispassWord1, ispassWord2, isCode, isEmail, isCard, isName, isMobileOrPhone, isLongitude, isLatitude,
  addObjectToArray,
  recursionRouter, convert
}