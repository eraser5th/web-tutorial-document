# 演習

## 演習1

気象庁のAPIを使って地元の天気予報を取得してみよう

以下のページを参考にしてみてください

https://anko.education/webapi/jma

## 演習2

この演習2は必ずやる必要はないです！  
少し時間があまっちゃった人などは取り組んでみてください

Goでサーバーを立ててみました

`/ping` にGETリクエストが来たら `pong`という文字列を返すように修正してください

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
