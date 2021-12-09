<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-05 19:07:27
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-09 14:03:58
 * @FilePath: \js-common-functions\README.ZH_CN.md
-->
# js-common-functions

js工具函数

[![GitHub stars](https://img.shields.io/github/stars/Magic-Academy/js-common-functions)](https://github.com/Magic-Academy/js-common-functions/stargazers)
[![GitHub license](https://img.shields.io/github/license/Magic-Academy/js-common-functions)](https://github.com/Magic-Academy/js-common-functions/blob/master/LICENSE)
[![Rate on Openbase](https://badges.openbase.io/js/rating/js-common-functions.svg)](https://openbase.io/js/js-common-functions?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[![NPM](https://nodei.co/npm/js-common-functions.png)](https://nodei.co/npm/js-common-functions/)

简体中文 | [English](./README.md) | [日本語](./README.JA.md)

### 安装

```bash 
npm install js-common-functions --save
```

### 演示

```js 
import {deepClone} from "js-common-functions";

console.log(deepClone({a: 1, b: {c: 2}})); // {a: 1, b: {c: 2}}

```
### Some functions

* deepClone - **深拷贝**
* shallowClone  - **浅拷贝**
* getObjectLength - **获取对象长度**
* timeFormat - **时间格式化**
* ajax - **ajax请求**
* isContain - **判断是否包含**
* unique - **去重**
* randomColor - **随机颜色**
* sortBy - **排序**
* randomCode - **随机验证码** 
* checkPassword - **密码强度**
* checkEmail - **检查邮箱格式是否正确**
* checkPhone  - **检查手机格式是否正确**
* checkIdCard - **检查身份证格式是否正确**
* checkBankCard - **检查银行卡格式是否正确**
* checkPhoneSystem - **检查手机系统**
* getPhoneAttribution - **获取手机归属地**
* fetch - **fetch请求**
* isPC - **判断是否为PC**
* trim - **去除字符串空格**
* filterHTML - **过滤html标签**
* isFloat - **判断是否为浮点数**
* isInteger - **判断是否为整数**
* stringifyQueryString - **将对象转换为查询字符串**
* getScrollTop - **获取滚动条高度**
* windowResize - **窗口大小改变**

如有疑问，请提交[issues](https://github.com/Magic-Academy/js-common-functions/issues/new) :)