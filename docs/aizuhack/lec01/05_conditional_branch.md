---
---

# 条件分岐( if・switch )

## 条件分岐 其ノ壱（if文）

`if文`を使うことにより、与えた真偽値によって実行する処理の内容が変わる。

与えられた真偽値が`true`であれば`if`の中身が実行され、`false`であれば`else`の中身が実行される。また、`else if`を使うことにより、`else`に対して別の条件を加えることもできる。

### 書き方

#### その１

```javascript
if (条件) {
  // 条件がtrueの時の処理
}
```

例）
```javascript
const a = 1

if (a === 1) {
  console.log("aは１です")
}
```

#### その２

```javascript
if (条件) {
  // 条件がtrueの時の処理
} else {
  // 条件がfalseの時の処理
}
```

例）
```javascript
const a = 2

if (a === 1) {
  console.log("aは１です")
} else {
  console.log("aは1ではありません")
}
```

#### その３

```javascript
if (条件１) {
  // 条件１がtrueの時の処理
} else if (条件２) {
  // 条件１がfalseで、条件２がtrueの時の処理
} else {
  // 条件１も条件２もfalseの時の処理
}
```

例）
```javascript
const a = 3

if (a === 1) {
  console.log("aは１です")
} else if (a === 2) {
  console.log("aは2です")
} else {
  console.log("aは1でも2でもありません")
}
```

### 例

数値の偶奇判定

```javascript
const num = 0

if (num % 2 === 0) {
  console.log("numは偶数です")
} else if (num % 2 === 1) {
  console.log("numは奇数です")
} else {
  console.log("不明な値です")
}
```

### 演習

`if文`を使ってみよう

#### 問題１ `Min`

二つの数値a,bを比較し、小さい方を出力させなさい。

[回答例](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex01_Min/Min.js)

:::info
できたら`a`, `b`の値を変えて試してみてください。
:::

```javascript
let a = 8
let b = 4

// この下に自分のプログラム
```

#### 問題2 `FizzBuzz`

数値aが３の倍数であるときは`Fizz`を、５の倍数である時は`Buzz`を、１５の倍数である時は`FizzBuzz`を出力させなさい。

[回答例](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex02_FizzBuzz/FizzBuzz.js)

:::info
できたら`a`の値を変えて試してみてください。
:::

```javascript
let a = 18

// この下に自分のプログラム
```

## 条件分岐 其ノ弐（switch・case文）

`switch・case文`を使うことにより、与えた値によって実行する処理の内容が変わる。

### 書き方

```javascript
switch (確認したい値) {
  case 一致する値１:
    // 処理1
    break
  case 一致する値２:
    // 処理2
    break
  ...
  default: // どのcaseにも当てはまらなかった場合に実行される。（なくても良い）
    // 処理
    break
}
```

:::danger
`break`を書き忘れない様に気をつけよう。
:::
### 例

```javascript
const a = 1
const b = 2
const operation = '+'

switch (operation) {
  case '+':
    console.log(a + b)
    break
  case '*':
    console.log(a * b)
    break
  default:
    console.log('不明な演算子`', operation, '`を渡されました')
    break
}
```