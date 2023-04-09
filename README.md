# mini-router

# 设计思想

**构建单页应用 SPA**

1. HTML5 history API
2. hash

**显示对应组件**

1. 路由和组件的映射关系
2. `router-view`: 容器，在哪里渲染组件

**路由跳转**

1. `router-link`

# 思路

1. 定义一个插件作为载体-> createRouter 返回的对象
2. 两个组件`router-view` 和 `router-link`
3. 创建路由实例的`createRouter()`

# 创建插件

1. createRouter
2. 返回一个对象，要实现 install 方法
3. - 注册两个组件
   - 注册$router 和 $route

# RouterLink

1. 输出
   - `<router-link>xxx</router-link>`
   - `<a href='#/yyy'>xxx</a>`
2. 输入： to
3. 默认插槽
