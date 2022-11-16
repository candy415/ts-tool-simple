/*
 * @Author: huwanfei
 * @Date: 2022-11-16 10:42:47
 * @LastEditTime: 2022-11-16 10:52:43
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /组件库/ts-tool-simple/src/downloadFile/index.ts
 */
/**
* 下载/导出文件, 根据返回的全地址进行下载
* @param  {json} data 后端返回的数据
* @param  {String} filename 前端默认的文件名称
*/
export function downloadFile (data:any, filename:string) {
  // isString为true, 代表返回的是文件的全地址进行下载, false表示通过接口请求返回的是流文件
  const isString:boolean = typeof data === 'string'
  let result:any // 后台返回的文件地址/文件流
  let name:string // 后台返回的文件名称

  if (isString) {
    name = (data && data.split('?')[1].split('&')[0].split('=')[1])
    result = data
  } else {
    name = (data.headers['content-disposition'] && data.headers['content-disposition'].split(';')[1].split('=')[1])
    result = data.data
  }
  // 这里和后端统一约定好格式类型: 对应导出模块名称+清单+日期，如“企业运营-员工管理-员工清单20220318”
  const fileName = name || downloadFileName(filename)

  // IE10+兼容
  const nav = (window.navigator as any);
  if (nav.msSaveOrOpenBlob) {
    nav.msSaveBlob(result, fileName)
  } else {
    const link = document.createElement('a')
    const body = document.querySelector('body')

    link.href = !isString ? window.URL.createObjectURL(result) : result
    link.download = decodeURIComponent(fileName)

    // fix Firefox
    link.style.display = 'none'
    body?.appendChild(link)

    link.click()
    body?.removeChild(link)

    !isString && window.URL.revokeObjectURL(link.href)
  }
}

/**
 * 下载/导出文件默认名称
 * @param {*} name 导出功能模块名称
 * @returns {String} 完成下载/导出文件名称
 */
function downloadFileName (name:string):string {
  return name + Math.random()
}

export default downloadFile
