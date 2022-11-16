
/**
 * 设置sessionStorage
 * @param {string} key
 * @param {any} value
 */
 export function setCache (key:string, value:any) {
  if (value === undefined || value === null) {
    window.sessionStorage.setItem(key, value)
  } else {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
}

/**
 * 获取sessionStorage
 * @param {string} key
 * @returns {any}
 */
export function getCache (key:string):any {
  const Storage = window.sessionStorage as any
  if (Storage.getItem(key) === 'undefined' || Storage.getItem(key) === null) {
    return undefined
  }
  return JSON.parse(Storage.getItem(key))
}

/**
 * 清除指定sessionStorage
 * @param {string} key
 */
export function removeCache (key:string):any {
  return window.sessionStorage.removeItem(key)
}

/**
 * 清除所有sessionStorage
 */
export function removeAll () {
  return window.sessionStorage.clear()
}
