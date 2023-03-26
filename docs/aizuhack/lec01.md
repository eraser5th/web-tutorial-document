---
title: AizuHack JavaScript勉強会
slideOptions:
  theme: white
  transition: 'fade'
  center: false
---

# AizuHack
# ~ JavaScript勉強会 ~

---

## はじめに

2022年度AizuHackのWebコース・LINE Botコース勉強会第一回の資料です。

---

### そもそもJavaScriptとは？

> JavaScript (JS) は軽量で、インタープリター型、あるいは実行時コンパイルされる、第一級関数を備えたプログラミング言語です(MDNより)

詳しくは[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript)

主にどこで使われているかというと、まずはWebにおいて人間の入力に対し動作する部分（何かを送信するなど）を定義する。他には、JavaScriptをブラウザ以外でも使える様にしたNode.jsと呼ばれるものを使うことにより、サーバーを作ったりする（今回のLINE Botコースはこれを使う）。

---

### この勉強会（Web）においての表記

- `このような`見た目になっているものは基本的に、ターミナルのコマンドかプログラムで使うワード、または強調したい単語です。

```javascript
このような見た目になっているところは実際のプログラムです。

基本的にそのまま実行可能ですが、
一部説明のために日本語になっている部分は動かない可能性があります。
試す際は日本語のない部分を試してください。

// またこのように // の後の部分はコメントといい、プログラムに影響しません。
```

---

#### ワード

| ワード         | 説明                 |
| ------------ | ---------           |
| `コード`       | `プログラム`のこと       |
| `コーディング`  | `プログラミング`のこと     |
| `node`       | JavaScriptの実行環境   |

---

### 今回の作業について

以下のリンクを参考に作業環境を構築します。

[https://hackmd.io/@vUVXjMmXTYu4hcxiNxyH3w/SJVNoJE8c](https://hackmd.io/@vUVXjMmXTYu4hcxiNxyH3w/SJVNoJE8c)

---

### 演習について

各問題に対し、`問題名.js`というファイルを作り、その中にプログラムを書いてください。

実行はターミナルから以下の様にするとできます。

```shell=
node 問題名.js
```

:::info
演習のできた方は Discordの「web_雑談」もしくは「linebot_雑談」チャンネルで送っていただければ、講師・メンターに余裕がある際にはレビューします！
:::

---

## 変数・定数

プログラムにおいて、値を一時的に保存する箱のようなもの。

- 値を何回でも入れ直せる`let`（変数）
- 値を1回入れると変更できない`const`（定数）

:::danger
変数には`var`もありますが、基本的に使わないでください
:::

---

### 試してみよう

`node`で試してみよう

まずはターミナルで以下を実行

```shell=
node
```

立ち上がった`node`の環境で以下を実行

```javascript
let a = 1
console.log(a) // 期待される出力:  1
a = 2
console.log(a) // 期待される出力:  2

const b = 3
console.log(b) // 期待される出力:  3
// constに再代入しようとするとエラー
b = 4
console.log(b) // 期待される出力:  3
```

---

## 四則演算

足し算、引き算、掛け算、割り算のこと。

JavaScriptでは`+`, `-`, `*`, `/`で表現する。割り算のあまりは`%`。

`node`で試してみよう

```javascript
1 + 2   // 期待される値: 3
4 - 3   // 期待される値: 1
2 * 3   // 期待される値: 6
6 / 2   // 期待される値: 3
5 % 2   // 期待される値: 1
```

---

## 基礎的なデータ型

JavaScriptが扱う値にはいくつか種類（型）がある。中でも基本的なものを紹介します。

---

### number

数値を扱う型

```javascript
const one = 1
```

---

### string

文字列を扱う型

シングルクォーテーション(`'`)かダブルクォーテーション(`"`)で囲む。

```javascript
const myName = "ERASER"
console.log(myName)

const str = "これ=> \n <=" 
console.log(str)
```

---

#### 改行

JavaScriptの文字列において改行は`\n`で表す。

```javascript
const str = "これは改行 => \n <=" 
console.log(str)
```

---

#### 文字列の連結

JavaScriptにおいて文字列は`+`で連結することができます。

```javascript
const myName = "ERASER"
console.log("Hi! I'm " + myName + "!")
```

---

### boolean

真偽値を扱う型。

`true`(真)と`false`(偽)のみ。

```javascript
let bool = true
bool = false
```

---

### array（配列）

プログラミングにおいてリストを扱うための概念。

#### 例１

```javascript
const animals = ["dog", "cat", "bird"]

console.log(animals) // 期待される出力: ["dog", "cat", "bird"]
```

---

#### 例２

配列の中に配列を入れることもできる。　

```javascript
const arrayInArray = [
  [1, 1, 1],
  [2, 4, 8],
  [3, 9, 27]
]
```

---

#### 要素へのアクセス

配列内の要素は、`配列[数値]`でアクセスできる。

:::warning
配列の１番目は`配列[0]`、２番目は`配列[1]`、の様に0スタートであることに注意してください。
:::

##### 例１
```javascript
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])
console.log(numbers[1])
```

---

##### 例２

変数を使ってアクセスすることもできます。

```javascript
const numbers = [1, 2, 3, 4, 5]

const a = 4
console.log(numbers[a])
```

---

#### 配列の便利な機能

配列には便利な機能が存在するので、そのうちのいくつかをここで紹介しておきます。

:::success
最初の2つ以外は「こんなのあるんだ〜」程度で大丈夫です。使いたい時に見てください。

ほとんどは後述の関数についてやってからじゃないと使えません
:::

そのほかの機能についてなど詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

##### `Array.length`

配列の長さを取得します。

```javascript
[1, 2, 3].length // 期待される値: 3

// 変数でもおなじ
const a = [1, 2, 3]
a.length // 期待される値: 3
```

---

##### `Array.push()`

配列の末尾に値を追加したい時に使います。

```javascript
const MultipleOfFive = [5, 10, 15, 20]

MultipleOfFive.push(25)

console.log(MultipleOfFive)
```

---

##### スプレッド構文(配列の分解)

配列はスプレッド構文(`...`)を使うことによって分解することができる。

使い所は様々で、元の配列を変えずに値を追加したい時(Array.pushを使うと元の配列が変わってしまう)など。

```javascript
const numbers = [1, 2, 3]

const newNumbers = [0, ...numbers, 4]
console.log(newNumbers) // 期待される出力: [0, 1, 2, 3, 4]

// この様にすると、配列の中に配列が入っている状態になってしまう
const newMistakenNumbers = [0, numbers, 4]
console.log(newMistakenNumbers) // 期待される出力: [0, [1, 2, 3], 4]
```

---

##### `Array.map()`

配列の各値に対し関数を適応した値の配列を返します。（日本語むずい😅）

:::info
めちゃめちゃ便利なので余裕のある方は使って慣れていくといいです。
:::

例） 配列の全要素を2倍する

```javascript
const a = [1, 2, 3]
const mappedA = a.map((v) => {
  return v * 2
})

console.log(mappedA)

// aは変わらない
console.log(a)
```

詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

##### `Array.forEach()`

配列の各値に対し関数を実行します。`Array.map`とは違い、配列を返しません。

例） 配列の全要素を出力する

```javascript
[1, 2, 3].forEach((v) => {
  console.log(v)
})
```

詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

---

##### `Array.filter()`

配列の各値に対し関数を実行し、その関数がtrueを返したものを残し、falseを返したものを消去した配列を返します。（日本語むずい😅）

例） 偶数のみを残す

```javascript
const numbers = [1, 2, 3, 4, 5]
const evens = numbers.filter((v) => {
  return v % 2 === 0
})

console.log(evens)

// numbersは変わらない
console.log(numbers)
```

詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

##### `Array.reduce()`

説明が難しいので例を見てください。

例） 配列内の総和を求める。

```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((a, b) => {
  return a + b
})

console.log(sum) // 期待される出力: 15

// numbersは変わらない
console.log(numbers)
```

詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

---

##### `Array.slice()`

配列の一部を切り出した配列を返す。


例） 配列の最初から三つの配列を取得する

```javascript
const numbers = [1, 2, 3, 4, 5]
const slicedNumbers = numbers.slice(0, 3)

console.log(slicedNumbers) // 期待される出力： [1, 2, 3]

// numbersは変わらない
console.log(numbers)
```

詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

---

##### `Array.sort()`

配列を渡した関数に従ってソート（順番入れ替え）する。渡す関数の仕様についてはちょっと難しいので、[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)を見ていただけると。

```javascript
const numbers = [2, 1, 5, 3, 4]
numbers.sort((a, b) => {
  return a - b
})

console.log(numbers) // 期待される出力: [1, 2, 3, 4, 5]
```

---

### object

関連のあるデータと機能の集合（MDNより引用）

例えばtwitterのアカウントであれば以下の様なものをまとめられそうである。

 - 表示名
 - id
 - 誕生日
 - 自己紹介文
 - アイコンの画像のURL
 
この`表示名`の様な項目のことを、`プロパティ`と呼ぶ

---

#### objectの作り方

```javascript
const person = {
  name: "Yuta Tomiyama",
  nickname: "mayamito",
  id: "yt8492",
  age: 21,
}
```

#### objectのプロパティへのアクセス

プロパティへのアクセスは、`.`を用いて行う。

書き方

```javascript
person.nickname // 期待される値: "mayamito"

// 値を追加や変更することも可能
person.birthday = "20000119"
person.birthday // 期待される値: "20000119"
```

---

#### 配列内のオブジェクト

オブジェクトは値なので配列にも入れられる。

```javascript
const userList = [
  { name: 'ERASER', age: 20 },
]

userList[0].name // 期待される値： 'ERASER'
```

---

#### オブジェクト内のオブジェクト

オブジェクトのプロパティは値であればなんでも大丈夫なので、オブジェクトでも大丈夫です。

```javascript
const triangle = {
  point1: { x: 0, y: 0 },
  point2: { x: 8, y: 0 },
  point3: { x: 2, y: 4 },
}

triangle.point2.x // 期待される値： 8
```

---

### function（関数）

関数は値であるということだけ述べておきます。詳細については後述。

---

### JSON

データを文字列にしたもの。文字列にすることにより保存などのことがしやすい。

- `JSON.stringify`でJavaScriptの値をJSONに変換することができる。
- `JSON.parse`でJSONをJavaScriptの値に復元することができる

---

#### 色々な値で試してみよう

```javascript
animals
JSON.stringify(animals)
JSON.parse(JSON.stringify(animals))

person
JSON.stringify(person)
JSON.parse(JSON.stringify(person))
```

---

## 値の比較
2つの値の代償関係や等しいかどうかを調べる。
結果として、`boolean`（真偽値）を返します。

- `===`
  - 等しい場合`true`、そうでない場合`false`
- `!==`
  - 等しくない場合`true`、そうでない場合`false`
- `<`
  - 左の値が右の値より小さい場合`true`、そうでない場合`false`
- `<=`
  - 左の値が右の値より小さいか等しい場合`true`、そうでない場合`false`
- `>`
  - 左の値が右の値より大きい場合`true`、そうでない場合`false`
- `>=`
  - 左の値が右の値より大きいか等しい場合`true`、そうでない場合`false`

---

## 条件分岐 其ノ壱（if文）

`if文`を使うことにより、与えた真偽値によって実行する処理の内容が変わる。

与えられた真偽値が`true`であれば`if`の中身が実行され、`false`であれば`else`の中身が実行される。また、`else if`を使うことにより、`else`に対して別の条件を加えることもできる。

---

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

---

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

---

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

---

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

---

### 演習

`if文`を使ってみよう

---

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

---

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

---

## 条件分岐 其ノ弐（switch・case文）

`switch・case文`を使うことにより、与えた値によって実行する処理の内容が変わる。

---

### 書き方

:::danger
`break`を書き忘れない様に気をつけよう。
:::

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

---

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

---

## 繰り返し

同じ処理を繰り返したい場合、`for文`や`while文`を使う。

---

### `for`文

```javascript
for (初期化; 継続条件; 増分) {
  // 処理内容
}
```
`for文`は以下の順番で処理されていく。

1. `初期化`
2. `継続条件`。`継続条件`の評価が`true`であればこのまま続き、`false`の時は`for文`が終了する。 
4. `処理内容`
5. `増分`
6. 2へ戻る

---

#### 例

0 ~ 100 までを出力する

```javascript
for (let i = 0; i <= 100; i = i + 1) {
  console.log(i)
}
```

---

### `while`文

書き方
```javascript
while (継続条件) {
  // 処理内容
}
```

while文は以下の順に実行される

1. `継続条件`。継続条件の評価が`true`であればこのまま続き、`false`の時は`while文`が終了する。
2. `処理内容`
3. 1に戻る

---

#### 例

0 ~ 100 までを出力する

```javascript
let i = 0
while (i <= 100) {
  console.log(i)
  i = i + 1
}
```

---

### `break`

`for文`や`while文`の中で`break`を実行すると、`for文`、`while文`が終了する。

```javascript
for (let i = 0; i < 100; i = i + 1) {
  const isError = doSomething()
  if (isError) {
    break
  }
  ...
}
```

---

### `continue`

`for文`や`while文`の中で`continue`を実行すると、その回のループが終了し次のループに入る。

```javascript
for (let i = 0; i < 100; i = i + 1) {
  if (i % 2 === 1) {
    continue
  }
  console.log(i + "は偶数です！")
}
```

---

### 演習

`for文`、`while文`を使ってみよう。

---

#### 問題3 `HelloWorld_10times`

`for文` または `while文`を用いて、`Hello World!`を10回出力させなさい。

[回答例](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex03_HelloWorld_10times/HelloWorld_10times.js)

---

#### 問題4 `ArrayMin`

数値の配列aがある。aの中の最小値を出力しなさい。

[回答例](https://github.com/eraser5th/AizuHack-Web/tree/master/lec1/ex04_ArrayMin/ArrayMin.js)

```javascript
const a = [2, 8, 0, -1, 7]

// この下に自分のプログラム
```

---

## 関数

主に処理をひとまとめにするために使う。

`console.log`も関数。

---

### 関数 其ノ壱

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

---

#### 例

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

---

### 関数 其ノ弐（無名関数）

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

---

#### 例

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

---

### 関数 其ノ参（アロー関数）

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

---

#### 例

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

---

### `return文`

`return文`により値を返すことができる。

:::warning
`return文`が実行されると関数の処理は終了する。
:::

次のコードは与えられた引数の二乗を返す関数。

---

#### 其ノ壱

```javascript
function square1(x) {
  return x * x
}

square1(4) // 期待される値 16
```

---

#### 其ノ弐

```javascript
const square2 = function (x) {
  return x * x
}

square2(5) // 期待される値 25
```

---

#### 其ノ参

```javascript
const square3 = (x) => {
  return x * x
}

square3(6) // 期待される値 36
```

---

### 値としての関数

また、関数は値です。どういうことかというと次の様なことが可能です。

---

#### １ 変数への代入

変数に入れる
```javascript
const myConsoleLog = console.log

myConsoleLog("Hi!")
```

---

#### ２ 関数の引数に渡す

関数の引数にわたす（高階関数と言われる手法）

```javascript
const myConsoleLog = console.log

function giveWow(f) {
  f("Wow!")
}

giveWow(myConsoleLog)
```

例えば[この様な](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/high-func_example.js)使い方があります

---

#### ３ 関数を返す関数

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

---

### 演習

関数を使ってみよう。

:::info
余裕のある方は、いろいろな関数の書き方でやってみよう。
:::

---

#### 問題５ `MinFunc`

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

---

#### 問題6 `HelloWorld_n_times`

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

---

#### 問題7 `ArrayMinFunc`

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


---

## おわりに

JavaScript勉強会の内容はここまでです❗️お疲れ様でした❗️

勉強会の内容や演習問題について質問があれば、discordの「web_雑談」または「linebot_雑談」チャンネルでいつでもしてください❗️

:::info
ここからはいくつか追加の演習問題を置いておくので、余裕のある方、気になる方はやってみてください💪。
:::

---

## 追加演習

---

### 問題8 `Distance`

(x, y)座標上の点を二つ受け取り、その距離を求める関数を作成してください。点は、`x`と`y`をプロパティに持つオブジェクトで渡されます。

√の計算についてはこれを使うと良いでしょう。

```javascript
Math.sqrt(2) // => 1.4142135623730951
```

例) `{x: 1, y: 2}, {x: 2, y: 2} => √1 = 1`

[テスト用のコード](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex08_Distance/Distance.js)

[回答例](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex08_Distance/Distance_ansor1.js)

---

### 問題9 `ArrayPrimeFilter`

2以上の整数値の配列を受け取り、含まれる素数の配列を返す関数を作成しなさい。

例） `[2, 3, 4, 5] => [2, 3, 5]`

[テスト用のコード](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex09_ArrayPrimeFilter/ArrayPrimeFilter.js)

- [回答例1](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex09_ArrayPrimeFilter/ArrayPrimeFilter_ansor1.js) （あまり良くない回答）
- [回答例2](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex09_ArrayPrimeFilter/ArrayPrimeFilter_ansor2.js) （初心者おすすめ）
- [回答例3](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex09_ArrayPrimeFilter/ArrayPrimeFilter_ansor3.js) （おそらくベスト）（array.filterを使っているのでわからなくてもおk）

---

### 問題10 `Multiplying_i`

数値の配列を受け取り、配列の`i`番目(1~)の要素を`i`倍した配列を返す関数を作成しなさい。

例） `[2, 3, 4] => [2, 6, 12]`

[テスト用のコード](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex10_Multiplying_i/Multiplying_i.js)

- [回答例１](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex10_Multiplying_i/Multiplying_i_ansor1.js)
- [回答例２](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex10_Multiplying_i/Multiplying_i_ansor2.js) （[array.map](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)を使ったもの）
- [回答例３](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex10_Multiplying_i/Multiplying_i_ansor3.js) （遊んだ）

---

### 問題11


```javascript
function g (f) {
  return (function (x) {
    return f(f(x))
  })
}
function increment (x) {
  return x + 1;
}

// g(increment)(0)の結果を考えて、実行してみよ
// g(g(increment))(0)の結果を考えて、実行してみよ
// g(g(g(increment)))(0)の結果を考えて、実行してみよ
// g(g(g))(increment)(0)の結果を考えて、実行してみよ
// g(g(...g(increment)))(0) でgがn個のときの結果を考えてみよ
// g(g(...g(g)))(increment)(0) でgがn個のときの結果を考えてみよ
// 最後の２つは厳密性は無視しても良いので、証明を考えてみてください
```
