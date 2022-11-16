
/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */

 export function recursionRouter (userRouter:any[] = [], allRouter:any[] = []):Array<any> {
  const realRoutes:any[] = []
  allRouter.forEach((v) => {
    if (v.hidden) {
      // hidden路由直接加到处理后的路由中，后面按钮权限接口联调，再来控制
      realRoutes.push(v)
    } else {
      userRouter.forEach((item) => {
        if ((item.alwaysShow && item.meta.code === v.meta.permission)) {
          v.meta.icon = item.meta.icon
          if (item.children && item.children.length > 0) {
            v.children = recursionRouter(item.children, v.children)
          } else {
            v.children = null
          }
          realRoutes.push(v)
        }
      })
    }
  })
  return realRoutes
}

// 过滤路由hidden不为true
export function convert (arr:any[]):any[] {
  const newArr = arr.filter(item => !item.hidden)
  return newArr.map(item => {
    if (item.children && item.children.length > 0) {
      item.children = convert(item.children)
    }
    return item
  })
}
