---
sidebar_position: 4
title: ループ
---

# 繰り返し

同じ処理を繰り返したい場合、`for文`や`while文`を使う。

---

## `for`文

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

### 例

0 ~ 100 までを出力する

```javascript
for (let i = 0; i <= 100; i = i + 1) {
  console.log(i)
}
```

---

## `while`文

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

### 例

0 ~ 100 までを出力する

```javascript
let i = 0
while (i <= 100) {
  console.log(i)
  i = i + 1
}
```

---

## `break`

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

## `continue`

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

## 演習

`for文`、`while文`を使ってみよう。

---

### 問題3 `HelloWorld_10times`

`for文` または `while文`を用いて、`Hello World!`を10回出力させなさい。

[回答例](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex03_HelloWorld_10times/HelloWorld_10times.js)

---

### 問題4 `ArrayMin`

数値の配列aがある。aの中の最小値を出力しなさい。

[回答例](https://github.com/eraser5th/AizuHack-Web/tree/master/lec1/ex04_ArrayMin/ArrayMin.js)

```javascript
const a = [2, 8, 0, -1, 7]

// この下に自分のプログラム
```
