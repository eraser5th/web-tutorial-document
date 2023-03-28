---
---

# 関数

主に処理をひとまとめにするために使う。

`console.log`も関数。


## 関数 其ノ壱

書き方

```javascript
function 関数名(引数名) {
  // 処理内容
}


// 引数はなくてもよい
function 関数名() {
  // 処理内容
}

// 逆に複数にする時はこの様に書く
// これは二つだが、同様にして , で区切ると３個、４個...と増やせる
function 関数名(引数名１, 引数名２) {
  // 処理内容
}
```

呼び出し

```javascript
関数名(引数)
```

### 例

以下は与えられた引数が偶数かどうかを判定する関数。

```javascript
function checkIsEven1(n) {
  if (n % 2 === 0) {
    console.log(n + " is even.")
  } else {
    console.log(n + " is not even.")
  }
}

checkIsEven1(4)
checkIsEven1(5)
```

## 関数 其ノ弐（無名関数）

書き方

```javascript
// このままでは名前がないので呼び出せない
function (引数名) {
  // 処理内容
}

// 変数に代入することもできる
const 関数名 = function (引数名) {
  // 処理内容
}
```

### 例

以下は与えられた引数が偶数かどうかを判定する関数。

```javascript
const checkIsEven2 = function (n) {
  if (n % 2 === 0) {
    console.log(n + " is even.")
  } else {
    console.log(n + " is not even.")
  }
}

checkIsEven2(4)
checkIsEven2(5)
```

## 関数 其ノ参（アロー関数）

書き方

```javascript
// このままでは名前がないので呼び出せない
(引数名) => {
  // 処理内容
}

// 変数に代入することもできる
const 関数名 = (引数名) => {
  // 処理内容
}
```

### 例

以下は与えられた引数が偶数かどうかを判定する関数。

```javascript
const checkIsEven3 = (n) => {
  if (n % 2 === 0) {
    console.log(n + " is even.")
  } else {
    console.log(n + " is not even.")
  }
}

checkIsEven3(4)
checkIsEven3(5)
```

## `return文`

`return文`により値を返すことができる。

:::warning
`return文`が実行されると関数の処理は終了する。
:::

次のコードは与えられた引数の二乗を返す関数。

### 其ノ壱

```javascript
function square1(x) {
  return x * x
}

square1(4) // 期待される値 16
```

### 其ノ弐

```javascript
const square2 = function (x) {
  return x * x
}

square2(5) // 期待される値 25
```

### 其ノ参

```javascript
const square3 = (x) => {
  return x * x
}

square3(6) // 期待される値 36
```

## 値としての関数

また、関数は値です。どういうことかというと次の様なことが可能です。

### １ 変数への代入

変数に入れる
```javascript
const myConsoleLog = console.log

myConsoleLog("Hi!")
```

### ２ 関数の引数に渡す

関数の引数にわたす（高階関数と言われる手法）

```javascript
const myConsoleLog = console.log

function giveWow(f) {
  f("Wow!")
}

giveWow(myConsoleLog)
```

例えば[この様な](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/high-func_example.js)使い方があります

### ３ 関数を返す関数

関数の結果が関数（これも高階関数と言われる）

```javascript
function createGreeting(greeting) {
  return (function (name) {
    console.log(greeting + name + "!")
  })
}

const morningGreeting = createGreeting("Good morning! ")
morningGreeting("ERASER")

const helloGreeting = createGreeting("Hello! ")
helloGreeting("matumoto")
```

他にも色々できますが、こんなものにしておきます。

## 演習

関数を使ってみよう。

:::info
余裕のある方は、いろいろな関数の書き方でやってみよう。
:::

### 問題５ `MinFunc`

引数に数値を二つ取り、その二つのうち小さい方を返す関数を作成しなさい。

[回答例](https://github.com/eraser5th/AizuHack-Web/tree/master/lec1/ex05_MinFunc/MinFunc.js)

```javascript
function test(f) {
  console.log('(1, 2) => 期待される値: 1, 結果: ' + f(1, 2))
  console.log('(9, -5) => 期待される値: -5, 結果: ' + f(9, -5))
  console.log('(3, 18) => 期待される値: 3, 結果: ' + f(3, 18))
  console.log('(-12, -6) => 期待される値: -12, 結果: ' + f(-12, -6))
}

// この下に関数を作成。

test(/* 作成した関数を渡す */)
```

### 問題6 `HelloWorld_n_times`

引数に正の整数値を取り、その回数だけ`Hello World!`と出力する関数を作成しなさい。

[回答例](https://github.com/eraser5th/AizuHack-Web/tree/master/lec1/ex06_HelloWorld_n-times/HelloWorld_n_times.js)

```javascript
function test(f) {
  console.log(1)
  f(1)
  console.log(8)
  f(8)
}

// この下に関数を作成。

test(/* 作成した関数を渡す */)
```

### 問題7 `ArrayMinFunc`

引数に数値の配列を取り、配列内の最小の数値を返す関数を作成しなさい。

:::info
配列の長さは、`配列.length`で取得できる。
:::

```javascript
function test(f) {
  console.log([1, 2, 3, 4, 5], '=> 期待される値:', 1,'結果:', f([1, 2, 3, 4, 5]))
  console.log([3, 10, -5], '=> 期待される値:', -5, '結果:', f([3, 10, -5]))
  console.log([1], '=> 期待される値:', 1, '結果:', f([1]))
}

// この下に関数を作成。

test(/* 作成した関数を渡す */)
```

- [回答例１](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex07_ArrayMinFunc/ArrayMinFunc_ansor1.js) （先程のやつを関数にしただけ）
- [回答例２](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex07_ArrayMinFunc/ArrayMinFunc_ansor2.js) （[array.reduce](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)を使ったもの）