---
---

# 追加演習

## 問題8 `Distance`

(x, y)座標上の点を二つ受け取り、その距離を求める関数を作成してください。点は、`x`と`y`をプロパティに持つオブジェクトで渡されます。

√の計算についてはこれを使うと良いでしょう。

```javascript
Math.sqrt(2) // => 1.4142135623730951
```

例) `{x: 1, y: 2}, {x: 2, y: 2} => √1 = 1`

[テスト用のコード](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex08_Distance/Distance.js)

[回答例](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex08_Distance/Distance_ansor1.js)

## 問題9 `ArrayPrimeFilter`

2以上の整数値の配列を受け取り、含まれる素数の配列を返す関数を作成しなさい。

例） `[2, 3, 4, 5] => [2, 3, 5]`

[テスト用のコード](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex09_ArrayPrimeFilter/ArrayPrimeFilter.js)

- [回答例1](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex09_ArrayPrimeFilter/ArrayPrimeFilter_ansor1.js) （あまり良くない回答）
- [回答例2](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex09_ArrayPrimeFilter/ArrayPrimeFilter_ansor2.js) （初心者おすすめ）
- [回答例3](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex09_ArrayPrimeFilter/ArrayPrimeFilter_ansor3.js) （おそらくベスト）（array.filterを使っているのでわからなくてもおk）

## 問題10 `Multiplying_i`

数値の配列を受け取り、配列の`i`番目(1~)の要素を`i`倍した配列を返す関数を作成しなさい。

例） `[2, 3, 4] => [2, 6, 12]`

[テスト用のコード](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex10_Multiplying_i/Multiplying_i.js)

- [回答例１](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex10_Multiplying_i/Multiplying_i_ansor1.js)
- [回答例２](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex10_Multiplying_i/Multiplying_i_ansor2.js) （[array.map](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)を使ったもの）
- [回答例３](https://github.com/eraser5th/AizuHack-Web/blob/master/lec1/ex10_Multiplying_i/Multiplying_i_ansor3.js) （遊んだ）

## 問題11

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