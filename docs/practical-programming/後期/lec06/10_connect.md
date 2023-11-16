# DBとの接続

GoでDBと接続を行うには、ドライバーを入れる必要があります  
ドライバーの一覧は [公式のWiki](https://github.com/golang/go/wiki/SQLDrivers)に記載されています

今回は、[mattn/go-sqlite3](https://github.com/mattn/go-sqlite3/tree/master)を使用します

## 初期設定

標準ではないパッケージを使用するため、モジュールの依存関係を管理するファイルである **go.mod** を作成します  
作成するには `go mod init`コマンドを使用します  
(`sqlite-example`の部分はモジュール名なのでお好みで変えてもらっても大丈夫です)

```bash
go mod init sqlite-example
```

そして、`go get`コマンドによってインストールします  
(これを実行するとgo.modに記述されるので見てみてください)

```bash
go get github.com/mattn/go-sqlite3
```

今回は、ex2.dbを使用します  
以下の手順でデータを入れておきます  
(Go側からデータを入れることもできますが、簡単のため先にデータを用意しておきます)

```bash
# ex2.dbという名前のDB(ファイル)を作成
$ sqlite3 ex2.db

# 初期化を行う
sqlite> DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS contents;

-- usersテーブルを作成
CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- usersテーブルにデータを挿入
INSERT INTO users (id, name)
VALUES
    (1, 'matumoto'),
    (2, 'eraser'),
    (3, 'suzakutakumi'),
    (4, 'yuorei');

-- contentsテーブルを作成
CREATE TABLE contents(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content VARCHAR(140) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- contentsテーブルにデータを挿入
INSERT INTO contents (user_id, content)
VALUES
    (1, 'おなかいて'),
    (1, '二度寝してた'),
    (1, '家 集中力 どうして[検索]'),
    (2, '雨ワロタ'),
    (2, 'とりっくおあとりーと'),
    (3, '手足が軽く震えてる'),
    (4, '山手線一周した'),
    (1, 'ぐわーーーっっっ！！！(断末魔)');


# SELECTの際にヘッダーを表示するように設定を変更
sqlite> .headers on

# テーブル名を表示
sqlite> .table
```

## DBのテーブルの中身を取得してみる

次にGoの中で`users`テーブルの中身を取得するようなコードを書いてみます  
(簡単のためにエラーハンドリングなしで書いています)

```go
package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, _ := sql.Open("sqlite3", "./ex2.db")
	defer db.Close()

	rows, _ := db.Query("SELECT * FROM users")
	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		rows.Scan(&id, &name)
		fmt.Println(id, name)
	}
}
```

<details><summary> エラーハンドリングありver </summary>

```go
package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./ex2.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM users")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		err = rows.Scan(&id, &name)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(id, name)
	}
}
```

</details>
