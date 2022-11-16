
/**
 * 在编辑表单时, 下拉框列表中某一项已删除, 但表单中仍保留该字段, 需回显在表单中
 * @param {Array} res 后台返回的数据
 * @param {*} findCode 在res中寻找的findCode是否存在
 * @param {*} targetCode 需要添加的code
 * @param {*} targetName 需要添加的name
 */
 function addObjectToArray (res:object[], findCode:string, targetCode:string, targetName:string):object[] {
  // 寻找表单中下拉字段findCode在下拉列表中是否存在, flag为true表示不存在
  const flag = findArrayMatch(res, findCode)

  // 不存在, 则需要将该项的值手动添加到下拉列表中, 便于回显
  if (flag) {
    return [{ code: targetCode, name: targetName }, ...res]
  }

  return res
}

/**
 * 根据code寻找数组中是否有匹配项
 */
function findArrayMatch (arr:Array<any>, code:string):boolean {
  if (!code) return false

  const index:number = arr.findIndex(item => item.code === code)
  // index为-1时, 未找到
  return index === -1
}

export default addObjectToArray
