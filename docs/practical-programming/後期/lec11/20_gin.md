# GoでAPIサーバーを作る上で

GoでAPIサーバーを作るには今まで標準の `net/http` パッケージを使用してきましたが、外部で公開されているフレームワークなどを利用することもあります  
今回はそれらについての説明をしたいと思います

※応用的な話にはなりますが、「ふ〜〜ん」くらいの軽い気持ちで聞いてもらえたらと思います！

## フレームワーク

主要なものはこの２つです

- [Gin](https://github.com/gin-gonic/gin)
  - Star：73.6k
- [echo](https://github.com/labstack/echo)
  - Star：27.5k

### Gin

Ginは古くからあって結構人気のフレームワークです  
[v1.1](https://github.com/gin-gonic/gin/releases/tag/v1.1)が2016年にリリースされています  

実際に使う際はこんな感じで使えます

```go
package main

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func main() {
  // routerを宣言
  r := gin.Default()

  // /ping GET をハンドル
  r.GET("/ping", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "pong",
    })
  })

  r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
```

`net/http` パッケージと違ってGETやPOSTごとに作れるメソッドが用意されているので直感的です  
ハッカソンとかならこういったフレームワークを使うほうが楽だと思います

### echo

echoも古くからありますが、近年注目をあびてきたフレームワークです  
[v1.1.0](https://github.com/labstack/echo/releases/tag/v1.1.0)が2015年にリリースされていますが、リリースの更新頻度が高く、最近は[v4.11.4](https://github.com/labstack/echo/releases/tag/v4.11.4)がリリースされました

実際に使う際はこんな感じで使えます

```go
package main

import (
  "github.com/labstack/echo/v4"
  "github.com/labstack/echo/v4/middleware"
  "net/http"
)

func main() {
  // Echo instance
  e := echo.New()

  // Middleware
  e.Use(middleware.Logger())
  e.Use(middleware.Recover())

  // Routes
  e.GET("/", hello)

  // Start server
  e.Logger.Fatal(e.Start(":1323"))
}

// Handler
func hello(c echo.Context) error {
  return c.String(http.StatusOK, "Hello, World!")
}
```

## 選び方

こういったフレームワークを選ぶ際に、どのフレームワークを選べばよいのかというのは難しいです  
対応しているGoのバージョン、パフォーマンス、メモリ管理、開発のしやすさ、エコシステムが充実しているか、、、など多くのことを調べてから決めるといいと思います  
ただ、ハッカソンや個人開発であれば「触ったことないしとりあえず使ってみよう」といった感じで良いと思います  

もちろん最終課題の際に使用していただいても大丈夫です！！  
（なんなら使ったほうが楽に終わると思います）
