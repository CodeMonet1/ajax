// 导入mockjs
const Mock = require('mockjs')

// 调用Mock的方法，生成模拟的数据

// 生成一个用户名，*出现1-10次
// var data = Mock.mock({ 'username|1-10': '*' })

// 生成一个用户名，*出现5次
// var data = Mock.mock({ 'username|5': '*' })

// 生成一个年龄，年龄18-40岁中间
// var data = Mock.mock({ 'age|18-40': 0 })

// 随机生成一个id
// var data = Mock.mock('@id')

// 随机生成一个中文名称
// var data = Mock.mock('@cname()')

// 随机生成一个对象
var data = Mock.mock({
  id: '@id()',
  username: '@cname()',
  date: '@date(yyyy-MM-dd)',
  description: '@paragraph()',
  email: '@email()',
  'age|18-40': 0
})

console.log(data)