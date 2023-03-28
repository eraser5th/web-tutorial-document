---
---

# 配列(Array)

## スプレッド構文(配列の分解)

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


## 配列の便利な機能

配列には便利な機能が存在するので、そのうちのいくつかをここで紹介しておきます。

:::success
最初の2つ以外は「こんなのあるんだ〜」程度で大丈夫です。使いたい時に見てください。

ほとんどは後述の関数についてやってからじゃないと使えません
:::

そのほかの機能についてなど詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

### `Array.length`

配列の長さを取得します。

```javascript
[1, 2, 3].length // 期待される値: 3

// 変数でもおなじ
const a = [1, 2, 3]
a.length // 期待される値: 3
```

---

### `Array.push()`

配列の末尾に値を追加したい時に使います。

```javascript
const MultipleOfFive = [5, 10, 15, 20]

MultipleOfFive.push(25)

console.log(MultipleOfFive)
```

---

### `Array.map()`

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

### `Array.forEach()`

配列の各値に対し関数を実行します。`Array.map`とは違い、配列を返しません。

例） 配列の全要素を出力する

```javascript
[1, 2, 3].forEach((v) => {
  console.log(v)
})
```

詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

---

### `Array.filter()`

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

### `Array.reduce()`

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

### `Array.slice()`

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

### `Array.sort()`

配列を渡した関数に従ってソート（順番入れ替え）する。渡す関数の仕様についてはちょっと難しいので、[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)を見ていただけると。

```javascript
const numbers = [2, 1, 5, 3, 4]
numbers.sort((a, b) => {
  return a - b
})

console.log(numbers) // 期待される出力: [1, 2, 3, 4, 5]
```