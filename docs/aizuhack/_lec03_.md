---
sidebar_position: 4
title: AizuHack HTTP API勉強会 🚧
slideOptions:
  theme: white
  transition: 'fade'
  center: false
---

# AizuHack
# ~ HTTP API勉強会~

###### tags: `AizuHack`

---

## 今回の目的

前回のDOM勉強会により、簡単なWebアプリケーションを作成することができる様になった。今回はここに`REST API`と呼ばれるサーバーなどとのやりとりの仕方を学ぶことにより、さらに幅広いアプリケーションを作れる様になってもらいます。

## 今回の作業

これまで我々はcodepenを使ってきたが、流石に狭いことや、これからどの様にファイルを扱っていけばいいのかの知識が多少必要と判断したので他のサービスを使うことにします。

https://codesandbox.io/s/angry-gauss-4f0c7m?file=/style.css:34-48

## クライアントサーバモデル

クライアントサーバモデルは機能や情報（サービス）を提供するサーバと、それを利用するクライアントとを分離し、ネットワーク通信によって接続するコンピュータネットワークソフトウェアモデルである。（[Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%A2%E3%83%87%E3%83%AB)より）

例としてTwitterの場合、アプリ（サイト）がクライアント、ユーザーやツイートの情報を保存するなどして扱っているのがサーバー。

TODO:図を入れる

## HTTP通信

`HTTP`は`HyperText Transfer Protocol`の略であり、クライアントサーバモデルに則った通信方式の一つである。主にHTMLやJSONなどを扱うことが多いが、拡張が可能であり、そのため様々なデータを扱うことが可能。

関数の引数と返り値みたいなもので、要求に従って必要なデータを返したり、渡したデータを保存したりする。

:::info
皆さんがみているWebサイトなども、このHTTP通信によってHTMLやCSSなどのファイルを取得してきている。
:::

## HTTPメッセージ

クライアントとサーバが送り合うデータのこと。
クライアントが最初にサーバに対してリクエストと呼ばれるHTTPメッセージを送信する。そのメッセージに従ってサーバは処理を行い、最終的な結果やデータをレスポンスというHTTPメッセージとして送信する。

### リクエスト

HTTPリクエストとはクライアントからサーバーに送る情報のことである。

- 開始行 （必須）
  - HTTPメソッド（後述）
  - URL
  - HTTPバージョンなど
- ヘッダー （必須ではない）
  - ボディの形式の指定
  - 認証情報など
- ボディ （必須ではない）
  - リクエストの本文

### レスポンス

サーバーがクライアントに返す情報。大きく分けて3つの要素から成る
- 開始行
  - HTTPバージョン
  - ステータスコードなど
- ヘッダー （必須ではない）
  - ボディの形式の指定
  - キャッシュの有効期限など
- ボディ （必須ではない）
  - レスポンスの本文

## HTTPメソッド

HTTPメソッドは、リソースに対して実行したいアクションを示す一連のリクエストメソッドを定義しています（[MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/Methods)より）

つまり、URLでアクセスしたいリソースを指定し、メソッドでそれに対し何を行うかを指定する。

主に使うのは5つ(他にもある)

- `GET`
  - 主にリソースの取得に使われる
- `POST`
  - 主にリソースの送信に使われる
- `PUT`
  - 主にリソース全体の置き換えに使われる
- `PATCH`
  - 主にリソースの部分的な置き換えに使われる
- `DELETE`
  - 主にリソースの削除に使われる

ここで一つ、注意

## URLの構造

以下のURLを例にURLの構造を説明する。

`http://www.example.com/path/to/myfile?key1=value1&key2=value2`

### スキームまたはプロトコル

URLの`http://`の部分。これはブラウザーが使用すべきプロトコルを表し、通常、HTTPプロトコル(`http://`)または安全なバージョンであるHTTPS(`https://`)になる。他にもいくつかのスキームが存在する。

### オーソリティ

`www.example.com`は、名前空間を統制するドメイン名またはオーソリティである。これは、どのウェブサーバーが要求されているかを示す。

### パス

`/path/to/myfile`はウェブサーバー内にあるリソースのパスである。初期のウェブではこの様なパスが、ウェブサーバー内の物理的なファイルの場所を表していたが、現在のパスは大抵物理的な実情と関係がない、ウェブサーバーによって制御される抽象的なものになっている。

### パスパラメータとクエリパラメータ

#### パスパラメータ

パスパラメータは前述のパスをパラメータとして扱ったもの。基本的には一意性（同じものが他にない性質）があり、必須なものにパスパラメータを使うことが多い。

例）Twitterのユーザーページ

以下は講師のTwitterユーザーページのリンク。`kato39017816`の部分を自分のTwitterアカウントのID（表示名ではない）に変えると自分のページを見ることができる。

```
https://twitter.com/kato39017816
```

#### クエリパラメータ

`?key1=value1&key2=value2`の部分をクエリパラメータという。これは主に、オプショナルであり、なくても良いものに対し使うことが多い。

queryパラメータはパスの後に`?`を入れ、その後に`&`繋ぎで`キー名=値`という形式で指定できる。これはサーバに提供する追加パラメータであり、サーバはこれを元にリソースを返すことができる。

例)Twitterの検索ページ

`q=aiueo`の部分の`aiueo`を別の文字列に変えるとその検索結果が見れる。

```
https://twitter.com/search?q=aiueo&src=typed_query
```


## JavaScriptでHTTP通信を行う

JavaScriptでHTTP通信は`fetch`という関数を使う。使い方としては、第一引数に`URL`を文字列で、第二引数にメソッドやヘッダー、ボディなどが入ったオブジェクトを渡す。

```javascript=
fetch('ここにURL', {　ここに色々な付加情報を加える })

// 付加情報が何もない時は第二引数はなくても良い
fetch('ここにURL')
```

## Promise

`fetch`は、HTTPリクエストの結果を待たずに`Promise`と呼ばれる特殊なobjectを返し、次の処理に移行する。すると、fetchが終わった後に実行したい処理を並べて書くと、`fetch`が終わる前に実行されてしまう。これを防ぐためには、返された`Promise`には`then`という関数があるので、`then`に、処理が終わった時に実行して欲しい内容を関数で渡す。また、`then`の結果もまた`Promise`であるため、その関数も終わった後に実行したい関数を`then`を連ねることによって追加していくこともできる。また、`then`に渡した関数には、`Promise`を返した関数の、本当の処理結果が渡される。

```javascript=
fetch('https://us-central1-aizuhack-353413.cloudfunctions.net/Data?collection=Todo')
  // このresponseにはfetchの結果、すなわちサーバーからのレスポンスを表すオブジェクトが渡される
  .then((response) => {
    return response.json()
  })
  // このbodyには一個上のthenに渡した関数の結果が渡される。
  .then((body) => {
    console.log(body)
    return 'いかがでしょうか？'
  })
  // このmessageには一個上のthenに渡した関数の結果、すなわち 'いかがでしょうか？` が渡される。
  .then((message) => {
    console.log(message)
  })

console.log('ここは先に実行されてしまう')
```

```javascript=
const responsePromise = fetch(
  "https://us-central1-aizuhack-353413.cloudfunctions.net/Data?collection=Todo"
);

const bodyPromise = responsePromise.then((response) => {
  return response.json();
});

const messagePromise = bodyPromise.then((body) => {
  console.log(body);
  return "いかがでしょう？";
});

messagePromise.then((message) => {
  console.log(message);
});

console.log("ここは先に実行されてしまう");
```

## AizuHack用APIの説明

今回・次回の勉強会やハッカソン中に簡単に使えるAPIをよういしたのでその使い方を解説します。

機能としては、テーブルへのデータの追加、データの全件取得、データ一個の削除が用意されています。

まずベースとなるURLは以下となります。

```javascript=
'https://us-central1-aizuhack-353413.cloudfunctions.net'
```

### `/Data`

```javascript=
'https://us-central1-aizuhack-353413.cloudfunctions.net/Data'
```

に対し以下の三つのメソッドを用意してある。

#### GETメソッド

`collection`queryパラメータにより取得したいデータ一覧名を指定すると、そのデータ一覧が全て返される。

例）
```javascript=
const baseUrl = 'https://us-central1-aizuhack-353413.cloudfunctions.net'

function getParticipant() {
  fetch(baseUrl + '/Data?collection=participant', {
    method: 'GET',
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
}

getParticipant()
```

#### POSTメソッド

`collection`queryパラメータにより追加先のデータ一覧を指定し、追加したいデータをJSONにしてbodyに添付するとデータが追加される。

:::warning
オブジェクトのみが追加可能です。数値や配列などを追加したい場合はそれをオブジェクト中に入れてください。
:::

```javascript=
const baseUrl = 'https://us-central1-aizuhack-353413.cloudfunctions.net'

const me = {
  nickName: 'ERASER',
}

function putMe() {
  fetch(baseUrl + '/Data?collection=participant', {
    method: 'POST',
    body: JSON.stringify(me),
  })
}
```

#### DELETEメソッド

`collection`queryパラメータにより削除元のデータ一覧を指定し、もう一つ`id`queryパラメータに消したいデータのid（GETした時に一緒に送られてくる）を指定すれば消すことができる。

:::warning
`user`と`pass`の部分は勉強会中にホワイトボードに書くのでそれに変更してください。
:::

```javascript=
const myId = 'あなたのID'

const baseUrl = 'https://us-central1-aizuhack-353413.cloudfunctions.net'

fetch(baseUrl + '/Data?collection=participant&id=' + myId, {
    method: 'DELETE',
  })
```

## 最終課題

## SNSを作ってみよう！

今回と次回で、皆さんには**SNS**を作っていただきます！これが最終課題となりますので、皆さんぜひ頑張ってみてください！

今日の勉強会が終わる時に、一旦できているところまでで構いませんのでweb_雑談にて提出をお願いします。（codeSandboxのリンクをはってください）

また、今回の課題はかなり難易度が高いので、勉強会外で日程を決めて一緒に進める時間を取ろうと思っています。参加必須ではありませんが、頑張りたい方（圧）は来てくれたら相談に乗ります！もちろんDMなどでの質問もいつでも受け付けます！（若干１名以外質問してくれなくて寂しいです）

### 投稿先

`https://us-central1-aizuhack-353413.cloudfunctions.net/Data?collection=sns`

### 投稿を表すオブジェクト

今回は全員同じデータベースに投稿データを保存してもらいます。そのため全員の使うobjectが一致していないとエラーが出てしまう可能性があるので、以下と同じ形式のobjectを一つの投稿としてください。それぞれのプロパティの中身は自由に変えてもらって構いません。

```javascript=
const postTemplate = {
  user: {
    displayName: 'ERASER',
    iconUrl: 'https://pbs.twimg.com/profile_images/1450155051993862144/PpMfemx4_400x400.jpg',
  },
  content: '今日も1日がんばるぞい',
  // 画像のURL、何もない時は空の文字列にしてください
  mediaUrl: '',
  date: new Date().getTime(),
  likedCount: 0,
}
```

### 完成形イメージ

かなり雑です

https://codesandbox.io/s/sns-answer-umwj27

:::info
今回のコンセプトとして、同じSNSアプリを全員がそれぞれのクライアントを作るというのがあります。ですので、この完成形イメージと一致している必要は全くありませんし、かけ離れた面白い見た目なども期待しています。
:::

### ステップ１

投稿１個を作ろう

#### ステップ１−１

まずはHTML・CSSで

#### ステップ１−２

JavaScriptから投稿のHTML要素を生成する関数を作ろう。引数には`postTemplate`と同じ形式のobjectを受け取り、生成したHTML要素を返すと良いだろう。

:::spoiler 補足

`postTemplate`のようなオブジェクトであれば、投稿用のHTML要素がうまく作れそうだね、という意図です。  
必ずしもこの方法が正しいということではないので注意！

ちなみに、具体的には以下のような関数を作ってもらうことを意図しています。

```javascript=
// この関数の中でdocument.createElement()などをして投稿用のHTML要素を作成したい
function createPostElement(post) {
    
    // この関数の中で以下のようなものが使えると嬉しい
    post.user.displayName;
    post.user.iconUrl;
    post.content;
    post.mediaUrl;
    post.date;
    post.likedCount;
}
```

ちなみに、投稿イメージとしては :arrow_down: のような感じです。
