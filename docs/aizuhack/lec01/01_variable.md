---
sidebar_position: 2
---

# 変数・定数

プログラムにおいて、値を一時的に保存する箱のようなもの。

- 値を何回でも入れ直せる`let`（変数）
- 値を1回入れると変更できない`const`（定数）

:::danger
変数には`var`もありますが、基本的に使わないでください
:::

---

## 試してみよう

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
