# Goの基本構造

HelloWorldを出力する以下のソースコードをもとに基本構造を説明します

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}
```

## パッケージ

`package main` はそのソースコードファイルが存在するパッケージを指定しています  
Goでのパッケージとは、コードをまとめる単位の一つです  
基本的にディレクトリと同じような感覚で使用します

以下にディレクトリ構成とそれに準ずるパッケージ構成の例をいくつかあげます

```
OK
.
├── a
│   ├── hoge.go(pakcage main)
│   └── fuga.go(package main)
└── b
    └── piyo.go(package main)
```
※このとき、hoge.goとfuga.goは同一パッケージだが、piyo.goは別の`main`パッケージ

```
NG
.
├── a
│   ├── hoge.go(pakcage main)
│   └── fuga.go(package a)    // 同じ階層のパッケージが異なる
└── b
    └── piyo.go(package main)
```

また、`main`パッケージについては特殊なパッケージで、`main`パッケージ内の`main`関数からプログラムが実行されます(実行可能なGoプログラムは必ず`main`パッケージと、ちょうど一つの`main`関数をそれぞれ持っています)

```
OK(mainパッケージは存在しないが、ライブラリとして外部から呼ばれる前提なら実行可能でなくても良い)
.
├── a
│   ├── hoge.go(pakcage a)
│   └── fuga.go(package a)
└── b
    └── piyo.go(package b)
```

## インポート

`import "fmt"`によって標準パッケージの`fmt`パッケージを呼び出しています(formatの略)
これによって、`fmt`パッケージ内で公開されている関数や構造体を使用できるようになります

## `main`関数

`main`関数内では`fmt.Println("Hello World")`で`Hello World`という文字列を出力しています  
先程インポートした`fmt`パッケージの`Println`関数を使用しています

## その他

変数宣言や関数の作り方など、その他の文法については演習問題を解き進めながら調べて学んでいってもらいます
