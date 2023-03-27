# 基礎的なデータ型

JavaScriptが扱う値にはいくつか種類（型）がある。中でも基本的なものを紹介します。

## number

数値を扱う型

```javascript
const one = 1
```

## string

文字列を扱う型

シングルクォーテーション(`'`)かダブルクォーテーション(`"`)で囲む。

```javascript
const myName = "ERASER"
console.log(myName)
```

### 改行

JavaScriptの文字列において改行は`\n`で表す。

```javascript
const str = "これは改行 => \n <=" 
console.log(str)
```

### 文字列の連結

JavaScriptにおいて文字列は`+`で連結することができます。

```javascript
const myName = "ERASER"
console.log("Hi! I'm " + myName + "!")
```

## boolean

真偽値を扱う型。

`true`(真)と`false`(偽)のみ。

```javascript
let bool = true
bool = false
```

## array（配列）

プログラミングにおいてリストを扱うための概念。

### 例１

```javascript
const animals = ["dog", "cat", "bird"]

console.log(animals) // 期待される出力: ["dog", "cat", "bird"]
```

### 例２

配列の中に配列を入れることもできる。　

```javascript
const arrayInArray = [
  [1, 1, 1],
  [2, 4, 8],
  [3, 9, 27]
]
```

### 要素へのアクセス

配列内の要素は、`配列[数値]`でアクセスできる。

:::warning
配列の１番目は`配列[0]`、２番目は`配列[1]`、の様に0スタートであることに注意してください。
:::

#### 例１
```javascript
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])
console.log(numbers[1])
```

#### 例２

変数を使ってアクセスすることもできます。

```javascript
const numbers = [1, 2, 3, 4, 5]

const a = 4
console.log(numbers[a])
```

## object

関連のあるデータと機能の集合（MDNより引用）

例えばtwitterのアカウントであれば以下の様なものをまとめられそうである。

 - 表示名
 - id
 - 誕生日
 - 自己紹介文
 - アイコンの画像のURL

この`表示名`の様な項目のことを、`プロパティ`と呼ぶ

### objectの作り方

```javascript
const person = {
  name: "Yuta Tomiyama",
  nickname: "mayamito",
  id: "yt8492",
  age: 21,
}
```

### objectのプロパティへのアクセス

プロパティへのアクセスは、`.`を用いて行う。

書き方

```javascript
person.nickname // 期待される値: "mayamito"

// 値を追加や変更することも可能
person.birthday = "20000119"
person.birthday // 期待される値: "20000119"
```

### 配列内のオブジェクト

オブジェクトは値なので配列にも入れられる。

```javascript
const userList = [
  { name: 'ERASER', age: 20 },
]

userList[0].name // 期待される値： 'ERASER'
```

### オブジェクト内のオブジェクト

オブジェクトのプロパティは値であればなんでも大丈夫なので、オブジェクトでも大丈夫です。

```javascript
const triangle = {
  point1: { x: 0, y: 0 },
  point2: { x: 8, y: 0 },
  point3: { x: 2, y: 4 },
}

triangle.point2.x // 期待される値： 8
```

## function（関数）

関数は値であるということだけ述べておきます。詳細については後述。