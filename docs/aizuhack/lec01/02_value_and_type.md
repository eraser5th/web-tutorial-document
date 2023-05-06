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

