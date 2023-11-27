# JSON

> JSON (JavaScript Object Notation)は、軽量のデータ交換フォーマットです。人間にとって読み書きが容易で、マシンにとっても簡単にパースや生成を行なえる形式です。 JavaScriptプログラミング言語 （ECMA-262標準第3版 1999年12月）の一部をベースに作られています。  
> (https://www.json.org/json-ja.html より引用)

JSONというのはデータ交換フォーマットのことで、(名前,値)のペアの集まりです

例

```json
{
  "name": "matumoto",
  "age": 21,
  "nickname": "matumoto1234",
  "male": true,
  "skills": [
    "Go",
    "JavaScript",
    "C++",
  ],
  "friend": {
    "name": "eraser",
    "nickname": "eraser5th",
  },
  "𝕏": "matumoto_1234",
  "GitHub": "matumoto1234",
  "Facebook": null,
}
```

値として使用できるのは、`string, number, object, array, true, false, null`のどれかです

JSON形式についてのより詳しい説明などは https://www.json.org/json-ja.html を見てみてください

## アプリケーションでの使われ方

よくサーバーへリクエストする際の形式などに使用されます

例えば、

```json
{
  "name": "matumoto",
  "age": 21,
}
```

というようなリクエスト形式のみ受け付けるようにしたりします

Goでは [encoding/json](https://pkg.go.dev/encoding/json) という標準パッケージがあるのでこれを使うことが多いです

JSON文字列のbyte列を構造体にパースしている例

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"
)

func main() {
	jsonByteObject := []byte(`{
    "name":"matumoto",
    "age":21
  }`)

	var user struct {
		Name string `json:"name"`
		Age  int    `json:"age"`
	}

	err := json.Unmarshal(jsonByteObject, &user)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(user.Name, user.Age)
}

```

[Go Playground](https://go.dev/play/p/tOWQSHp9p1I)
