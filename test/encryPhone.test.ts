
import { encryptPhone } from '../src'

test("encryptPhone('15605885386')",() => {
  expect(encryptPhone('15605885386')).toBe('156****5386')
})