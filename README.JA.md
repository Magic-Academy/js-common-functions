<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-05 19:19:37
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-09 14:07:19
 * @FilePath: \js-common-functions\README.JA.md
-->
# js-common-functions

は、JavaScriptのコードを書く際に便利な関数を提供します。

[![GitHub stars](https://img.shields.io/github/stars/Magic-Academy/js-common-functions)](https://github.com/Magic-Academy/js-common-functions/stargazers)
[![GitHub license](https://img.shields.io/github/license/Magic-Academy/js-common-functions)](https://github.com/Magic-Academy/js-common-functions/blob/master/LICENSE)
[![Rate on Openbase](https://badges.openbase.io/js/rating/js-common-functions.svg)](https://openbase.io/js/js-common-functions?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[![NPM](https://nodei.co/npm/js-common-functions.png)](https://nodei.co/npm/js-common-functions/)

[简体中文](README.ZH_CN.md) | [English](./README.md) | 日本語

### インストール 

```bash 
npm install js-common-functions --save
```

### つかいかた

```js 
import {deepClone} from "js-common-functions";

console.log(deepClone({a: 1, b: {c: 2}})); // {a: 1, b: {c: 2}}

```
###  すべての関数

* deepClone - **深いコピー**
* shallowClone  - **浅いコピー**
* getObjectLength - **オブジェクトのプロパティの数を返す**
* timeFormat - **時間をフォーマットする**
* ajax - **Ajax通信**
* isContain - **文字列が含まれているかどうか**
* unique - **重複している要素を削除**
* randomColor - **ランダムな色を返す**
* sortBy - **配列を指定したキーでソート**
* randomCode - **ランダムな文字列を返す**
* checkPassword - **パスワードをチェックする**
* checkEmail - **メールアドレスをチェックする**
* checkPhone - **電話番号をチェックする**
* checkIdCard - **身分証をチェックする**
* checkBankCard  - **銀行カードをチェックする**
* checkPhoneSystem  - **電話番号のシステムをチェックする**
* getPhoneAttribution  - **電話番号の属性を返す**
* fetch  - **fetchを使ってリクエストを送信する**
* isPC - **PCかどうかを返す**
* trim  - **文字列をトリムする**
* filterHTML  - **HTMLタグを除去する**
* isFloat  - **浮動小数点数かどうかを返す**
* isInteger  - **整数かどうかを返す**
* stringifyQueryString - **クエリストリングを文字列に変換する**
* getScrollTop - **スクロール位置を返す**
* windowResize - **ウィンドウサイズを返す**

質問があれば提出してください[issue](https://github.com/Magic-Academy/js-common-functions/issues/new) :)