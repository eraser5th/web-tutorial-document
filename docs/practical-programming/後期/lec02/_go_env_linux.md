学内環境には権限の問題でインストールすることができないので個人のPCを使ってください！

1. [https://go.dev/dl/](https://go.dev/dl/) からLinux用のファイルをダウンロード
1. ダウンロードしたファイルを解凍して、`/usr/local` 以下に配置
  ```bash
  tar -C /usr/local -xzf ここにダウンロードしたファイル
  ```
  ※おそらく`sudo`を使用する必要があるので、エラーになったら上のコマンドの先頭に`sudo`をつけて実行してみてください
1. `~/.bashrc` に以下のコードを追加
  ```bash
  export PATH=$PATH:/usr/local/go/bin
  ```
1. ターミナルを開き直して、以下のコマンドを実行
  ```bash
  go version
  ```
  以下のような出力がされれば成功です(バージョンは違ってもOK)
  ```bash
  go version go1.21.3 linux/amd64
  ```