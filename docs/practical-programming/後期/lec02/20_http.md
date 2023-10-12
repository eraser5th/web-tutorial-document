# HTTP通信

HTTP(Hypertext Transfer Protocol)通信とは、クライアントとサーバーが通信する最もポピュラーな方法の一つのことです  
Hypertextといっていますが、実際にはバイナリなどの様々なデータを扱うことができます  
実際に開発する場合には、HTMLやJSONなどを扱うことが多いです

## HTTPリクエストとHTTPレスポンス

WebサイトなどはHTTPリクエストを送信し、そのHTTPレスポンスを読み取ってデータを取得したりします

### 演習

以下をターミナルで実行してみてください

```bash
curl http://example.com -v
```

#### 結果

HTTPリクエスト

![http request](/img/practical-programming/second/lec02/http-request.png)

HTTPレスポンス

![http response](/img/practical-programming/second/lec02/http-response.png)

## HTTPリクエスト

クライアント(Webサイトなど)からサーバーに送る情報

大きく分けて3つの要素からなります

- 開始行(必須)
  - メソッド、URL、HTTPバージョン
- ヘッダー
  - ボディの形式や認証情報など
- ボディ
  - リクエストの本文

## HTTPレスポンス

サーバーがクライアントに返す情報

大きく分けて3つの要素からなります

- 開始行(必須)
  - HTTPバージョン、ステータスコード
- ヘッダー
  - ボディの形式やキャッシュの有効期限など
- ボディ
  - レスポンスの本文

## HTTPリクエストメソッド

また、HTTPリクエストメソッドと呼ばれる、実行したい動作を示すリクエストメソッドがあります

主に使われるのは以下の5つです

- GET
  - リソースの取得など
- POST
  - リソースの送信など
- DELETE
  - リソースの削除など
- PUT
  - リソース全体の置き換えなど
- PATCH
  - リソースの部分的な置き換えなど

もし他のHTTPリクエストメソッドを知りたい人は、以下のリンクを見てみてください(自分も知らないものがたくさんあって面白かったです)

https://developer.mozilla.org/ja/docs/Web/HTTP/Methods

