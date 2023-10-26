# 前回のおさらい

[コンテスト](https://kenkoooo.com/atcoder/#/contest/show/586f2d20-2fc3-46bf-b376-a2549a5b00f5?activeTab=Problems)にGo言語で参加してもらいました  
(授業後に提出してくれていた方もいて、とても嬉しいです)
復習も兼ねて、みなさんの提出を見ながらどういう書き方があったのかというのを見ていきたいと思います

## 1. 植木算

みなさん解けていて素晴らしいです  
標準入力と標準出力に関しては問題なさそうです

`fmt`パッケージには、`fmt.Scan`や`fmt.Scanf`、`fmt.Print`、`fmt.Printf`、`fmt.Println`などがあるので気になった方は調べて見てください  
https://pkg.go.dev/fmt

## 2. お茶

これもみなさん解けていて素晴らしいです
`if`文で`b%a == 0`とする方法と、切り上げ除算を行う方法などの解法がありました

**良い解答例**

- 場合分け
  - https://atcoder.jp/contests/abc036/submissions/46736693
- 切り上げ除算(`math.Ceil`)
  - https://atcoder.jp/contests/abc036/submissions/46735035

## 3. キャンディーとN人の子供イージー

`1~N`までの総和を答える問題です  
`for`文を使ったやり方が多かったと思います(`for`の代わりに再帰関数で解いてる人もいました)  
以下のように書けていればおおむねOKだと思います！

```go
package main

import "fmt"

func main() {
    var n int
    fmt.Scan(&n)

    sum := 0

    for i := 1; i <= n; i++ {
      sum += i
    }

    fmt.Println(sum)
}
```

また、等差数列の和の公式を使えた人は高校数学をよく勉強していて偉いです(競技プログラミングが得意そう、もしくは素質がありそう...)

## 4. 台形

台形の上底の長さ、下底の長さ、高さが与えられるので面積を求める問題です  
概ね皆さん解けていて素晴らしいです

## 5. ι⊥l

`if`文を使う問題です  
問題文の条件に従って場合分けを行えばOKです

## 6. September 9

2桁の整数`N`に、`9`が各桁の数に含まれてるか判定する問題です  
`N%10 == 9 || N/10 == 9`で判定する方法が多かったです(`for`文を使っていた人もいました)

**良い解答例**

- https://atcoder.jp/contests/abc073/submissions/46745392
  - 8行目の`if n>= 10 && n < 100`というのは制約に関するものなので実は必要ありません..!

## 7. 暗証番号

4桁の整数が与えられるので、その桁の値がすべて同じ値であるかを判定する問題です  
`N/1000, (N-N/1000)/100,...`のように除算を駆使して各桁の値を出している人が多かったです  
これはちょっと長めになるのと、バグらせやすいのでおすすめはしません

また、`string`で受け取って`N[0], N[1],...`によって判定を行ったり、`N%1111`で判定を行ったりする人がいました  
(特に`N%1111`は天才ですね...)

**良い解答例**

- `string`で受け取る
  - https://atcoder.jp/contests/abc033/submissions/46735752
- `N%1111`
  - https://atcoder.jp/contests/abc033/submissions/46745470

## 8. 添字

文字列`s`と整数`i`が与えられるので、`s`の`i`番目の文字を出力する問題です  
Goでは`string`型に対して添字アクセスを行うと`uint8`型となって文字コードが返ってくるので、それを適切に出力する必要があります

- `string`型の添字アクセスした値の型を確認
  - https://go.dev/play/p/cNK5U2u8toh

この問題に対する解決方法としては、`fmt.Printf("%c", s[i])`のようにフォーマット指定子を使用するか、`fmt.Println(string(s[i]))`のようにキャストする方法などがあります

## 9. Fennec vs Monster

体力の多い順に必殺技を打っていって、残りのモンスターの大量の総和を答える問題です  
`sort.Slice`など標準パッケージの関数を使用できるのでそれを駆使すると良いです（提出していた人たちは`sort.Slice`を使えていて素晴らしいです）

**解答例**

```go
package main

import (
    "fmt"
    "sort"
)

func main() {
    var n, k int
    fmt.Scan(&n, &k)

    h := make([]int, n)
    for i := range h {
      fmt.Scan(&h[i])
    }

    sort.Slice(h, func(i, j int) bool {
      return h[i] > h[j]
    })

    sum := 0

    for i := k; i < len(h); i++ {
      sum += h[i]
    }

    fmt.Println(sum)
}
```

(https://atcoder.jp/contests/abc153/submissions/46939042)

## 10. Brick Break

Goが難しいというよりも問題の考察自体がちょっと難しい問題なため解説は行いませんが、もし興味のある人は解いてみてください!  
以下にmatumotoの解答例だけ載せておきます

解答例  
https://atcoder.jp/contests/abc148/submissions/46736077
