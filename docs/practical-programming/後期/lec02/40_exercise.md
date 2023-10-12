# 演習

## 演習1

気象庁のAPIを使って地元の天気予報を取得してみよう

以下のページを参考にしてみてください

https://anko.education/webapi/jma

## 演習2

この演習2は必ずやる必要はないです！  
少し時間があまっちゃった人などは取り組んでみてください

Goでサーバーを立ててみましょう

`main.go`というファイルを作成し、以下のソースコードをコピペしてください

```go
package main

import (
  "fmt"
  "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintf(w, "Hello World")
}

func main() {
  http.HandleFunc("/", handler)
  http.ListenAndServe(":8080", nil)
}
```

以下のコマンドでサーバーを動かすことができます  
※Goの環境構築については、次のページを参考にしてみてください

```bash
go run main.go
```

そうしたら、別のターミナルで以下のコマンドを実行して`Hello World`と返ってくることを確認してみてください

```bash
curl http://localhost:8080
```

では、このプログラムを、`/ping` にGETリクエストが来たら `pong`という文字列を返すように修正してみてください

以下のコマンドを実行したときに `pong` と返ってきていればOKです！

```bash
curl http://localhost:8080/ping
```

(まだGoについての文法の説明もしていないので、色々予想とかしながら進めてみてください！いろんな記事とか調べてみたり、Slackなどで質問してもらったりして大丈夫です！)
