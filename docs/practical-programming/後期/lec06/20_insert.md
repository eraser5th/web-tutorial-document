# データの挿入

以下のコードでDBにデータを挿入できます

```go
package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, _ := sql.Open("sqlite3", "./ex2.db")
	defer db.Close()

	tx, _ := db.Begin()

	tx.Exec("INSERT INTO users (name) VALUES ('namakero')")

	tx.Commit()
}
```

<details><summary>エラーハンドリングありver</summary>

```go
package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./ex2.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	tx, err := db.Begin()
	if err != nil {
		log.Fatal(err)
	}

	_, err = tx.Exec("INSERT INTO users (name) VALUES ('namakero')")
	if err != nil {
		log.Fatal(err)
	}

	err = tx.Commit()
	if err != nil {
		tx.Rollback()
		log.Fatal(err)
	}
}
```

</details>

実際にテーブルの中身を確認してみると`namakero`という値が挿入されているのがわかるかと思います

```bash
$ sqlite3 ex2.db

sqlite> SELECT * FROM users;
1|matumoto
2|eraser
3|suzakutakumi
4|yuorei
5|namakero
```

このコードでは、トランザクション(transaction)を使用しました  
`tx`がトランザクションを省略した言葉で、Goでは変数名などで割とよく使われます

なんとなく分かりやすい説明がこのサイトにのってるのでぜひ見てみてください  

- https://wa3.i-3-i.info/word142.html

先程のコードでは`db.Begin()`からトランザクションが始まり、`tx.Commit()`でトランザクションが終了しています  
仮にエラーが起こった場合は、`tx.Rollback()`などでロールバックを行ってトランザクション前のDBの状態に戻します  
(ゲームとかでよくあるロールバックもこのトランザクションに関わってきます)
