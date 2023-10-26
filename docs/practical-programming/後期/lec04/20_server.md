# サーバーを作ってみる

第二回の授業内で以下のコードを紹介しました  
これは `http://localhost:8080`にリクエストを送ると`Hello World`と返ってくるサーバーです  
今回はこのコードが何をしているのかをおおまかに把握し、演習でサーバーを作ってもらおうと思います[^1]

また、コードを編集していくので新しくmain.goというファイルを作成し、そこに以下のコードをコピペしてください

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

まずは`main`関数内の処理から見ていきます  
`http.HandleFunc`によってパスのパターン、そして`handler`関数を登録しています(`http.DefaultServeMux`に登録されます)  
指定したパスのパターンにマッチするようなリクエストが来た際に`handler`関数が実行されます

`http.ListenAndServe`によってアドレスを指定し、サーバーを立てています  
第二引数に`nil`を渡しているのは、デフォルトの設定(`http.DefaultServeMux`)を使用するためです

そして、`handler`関数は`w`と`r`という変数を引数に受け取っています  
これらを用いて、HTTPリクエスト、HTTPレスポンスを操作します  
`fmt.Fprintf`は第一引数に「書き込みができるもの(厳密には`io.Writer`)」を受け取ります  
ファイル操作などで使用する用途もありますが、今回はHTTPレスポンスへの書き込みを行っています

では、以下のようにコードを変更してみます

```diff
 package main

 import (
   "fmt"
   "net/http"
+  "strings"
 )

 func handler(w http.ResponseWriter, r *http.Request) {
-  fmt.Fprintf(w, "Hello World")
+  switch r.Method {
+  case "GET":
+    s := []string{"This", "is", "GET", "method"}
+    fmt.Fprintf(w, strings.Join(s, "\n"))
+  case "POST":
+    fmt.Fprintf(w, "This is POST method")
+  default:
+    fmt.Fprintf(w, "This is %s method", r.Method)
+  }
 }

 func main() {
   http.HandleFunc("/", handler)
   http.ListenAndServe(":8080", nil)
 }
```

編集後のコードを以下のコマンドで実行してみます

```bash
go run main.go
```

そして、`curl`コマンドで`POST`メソッドのリクエストを送ってみましょう

```bash
curl http://localhost:8080 -X POST
```

おそらく、`This is POST method` と返ってきたはずです

では、`curl`コマンドで`GET`メソッドのリクエストを送ってみましょう

```bash
curl http://localhost:8080
```

おそらく、

```
This
is
GET
method
```

と返ってきたはずです

このようにして、HTTPリクエストメソッドごとに処理を分けることもできます

[^1]: インターフェースなどの説明は省略します
