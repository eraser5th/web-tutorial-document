# 前回のおさらい

Goで以下のようなサーバーを書いてもらいました

- POSTリクエストでメッセージを保存する
- GETリクエストで保存してあるメッセージをすべて返す

```go
package main

import (
	"fmt"
	"io"
	"net/http"
	"strings"
)

var messages []string

func handler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		// 保存してあるメッセージをすべて返す
		j := strings.Join(messages, "\n")
		fmt.Fprint(w, j)
	case "POST":
		// メッセージを保存する
		msg, _ := io.ReadAll(r.Body)
		messages = append(messages, string(msg))
	default:
		fmt.Fprintf(w, "Sorry, only GET and POST methods are supported.")
	}
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
```
