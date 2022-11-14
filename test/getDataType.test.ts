/*
 * @Author: huwanfei
 * @Date: 2022-11-14 11:19:01
 * @LastEditTime: 2022-11-14 14:39:22
 * @LastEditors: huwanfei
 * @Description:  getDataType测试示例
 * @FilePath: /ts-tool-simple/test/getDataType.test.ts
 */
import { getDataType } from "../src";

describe('getDataType', () => {
  const array = [{
    target: 2,
    type: 'string'
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
