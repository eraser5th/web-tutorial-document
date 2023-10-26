# 演習

以下の要件を満たすサーバーを作成してください

1. 文字列をサーバーに保存するAPIを作成する
  - HTTPリクエスト
    - メソッド: POST
    - URL: `http://localhost:8080/message`
    - ボディ: サーバーに保存する文字列
  - HTTPレスポンス
    - 特になし
1. サーバーに保存した文字列を取得するAPIを作成する
  - HTTPリクエスト
    - メソッド: GET
    - URL: `http://localhost:8080/message`
  - HTTPレスポンス
    - ボディ: 今までPOSTで追加した文字列を空白区切りで連結して返す

POSTに関しては、以下のコマンドを利用してHTTP通信を送ってもらって大丈夫です

```bash
curl http://localhost:8080/message -X POST -d 'ここに保存するメッセージ'
```
