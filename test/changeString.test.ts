/*
 * @Author: huwanfei
 * @Date: 2022-11-16 10:34:47
 * @LastEditTime: 2022-11-16 10:38:22
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /组件库/ts-tool-simple/test/changeString.test.ts
 */
import { changeString } from '../src'

test(`changeString('15605885386') === '156****5386'`, () => {
  expect(changeString('15605885386',3,6,'****')).toBe('156****5386')
})