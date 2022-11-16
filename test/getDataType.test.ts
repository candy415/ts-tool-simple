/*
 * @Author: huwanfei
 * @Date: 2022-11-14 11:19:01
 * @LastEditTime: 2022-11-16 10:39:29
 * @LastEditors: huwanfei
 * @Description:  getDataType测试示例
 * @FilePath: /组件库/ts-tool-simple/test/getDataType.test.ts
 */
import { getDataType } from "../src";

describe('getDataType', () => {
  const array = [{
    target: 2,
    type: 'number'
  },
  {
    target: {a:1},
    type: 'object'
  },
  {
    target: [1,2],
    type: 'array'
  },
  {
    target: null,
    type: 'null'
  },
  {
    target: undefined,
    type: 'undefined'
  }]

  array.forEach(item => {
    test(`data type is ${item.type}`, () => {
      expect(getDataType(item.target)).toBe(item.type)
    })
  })
})
