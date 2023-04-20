# ざっくりとした技術の話

全体像を知りたい！という声に応えて、座学パートです

※4/15(土)の技術座談会に出た人はある程度知ってる話かもしれないので飛ばして大丈夫です

## 技術の全体像

技術といっても様々で、すごいたくさんの領域があります

- XR(VR,AR,MR)[^1]
- 言語処理[^2]
- 人工知能
- 機械学習
- アルゴリズム
- アプリケーション開発
- ハードウェア[^3]
- etc..

アプリケーション開発一つとっても、さらに細分化できます

- Webアプリケーション開発
  - Webフロントエンド[^4]
  - Webバックエンド[^5]
- スマホアプリケーション開発
  - iOSアプリ
  - Androidアプリ
- ゲーム開発
  - 専用ゲーム機向け
  - PC向け
- etc..

こんな風に技術といってもかなり幅広く、上記の内容以外にもたくさんの領域があります

なにを学んでみたいかは是非その分野に挑戦したりしてみて、自分の好きな分野を深く掘り下げていって発見してください  
(実際、どんな分野でも詳しく知っていけば自然と好きになるような気がする(高校の数学みたいな感じで))

## Webアプリケーション開発について

この授業はWebアプリケーションに焦点をあてているので、その話をします

Webアプリケーション開発は大きく2つの分野に分かれます

> ![Webアプリケーション開発について](/img/practical-programming/lec02/about-web-application.png)
> ![Webアプリケーション開発について2](/img/practical-programming/lec02/about-web-application2.png)
> ![Webアプリケーション開発について3](/img/practical-programming/lec02/about-web-application3.png)
> (技術座談会で発表された資料[Webフロント](https://docs.google.com/presentation/d/1F7kaJWy5GCFGB1q0dPF3ZIDiyA-YZHNl4pyPgOL6aUw/edit#slide=id.p)より引用)

というように、Webアプリケーション開発はフロントエンドとバックエンドの2つに分かれます

より具体的にどんな技術があるかは以下のような感じです

- Webフロントエンド
  - 見た目(UI)をデザインする[^6]
    - Figma
    - Adobe XD
  - サイトを作る
    - HTML,CSS,JavaScriptなど
- Webバックエンド
  - サーバーを作る
    - Go,Rust,C#,Scala,Node.jsなど
  - データを管理する(データベース)
    - RDB(Relational Data Base)
      - SQL,PostgreSQLなど
    - KVS(Key Value Store)
      - Amazon DynamoDB,Redisなど
  - サーバーを用意する(インフラ)
    - オンプレミス
    - クラウド
      - AWS,GCP,Azureなど

もちろん1人が全てを行うのは難しいので、Webデザイナー、フロントエンドエンジニア、バックエンドエンジニア、インフラエンジニア、フルスタックエンジニアなどの様々な在り方があります

企業とかが「バックエンドエンジニア募集！」みたいに言ってたらこれのことか〜みたいに思ってもらって大丈夫です


[^1]: XRの魅力を語りたい(技術座談会より)：https://docs.google.com/presentation/d/1EriNjxkelVxTRljrdbFw08IUWjxUa5Nh-XNgcuCbEhY/edit#slide=id.p
[^2]: プログラミング言語を学ぶ楽しさ(技術座談会より)：https://docs.google.com/presentation/d/1D7PYfkCHdHYZ63xzAVWOY5LfKPbc2j04xTBVtu74YFM/edit#slide=id.p
[^3]: 「ハードウェア」の作り方(技術座談会より)：https://docs.google.com/presentation/d/1K30W0hHquyvc-irZ9gtaZQf24Jn4NnUZZZCH_wvVxTA/edit#slide=id.p
[^4]: Webフロント(技術座談会より)：https://docs.google.com/presentation/d/1F7kaJWy5GCFGB1q0dPF3ZIDiyA-YZHNl4pyPgOL6aUw/edit#slide=id.p
[^5]: バックエンド開発入門(技術座談会より)：https://docs.google.com/presentation/d/1UxIgcxC7c4dyt4zm_xYBEpQlbND4_t58nSAFBcGvToI/edit#slide=id.p
[^6]: 厳密にはデザイナーの分野であってWebフロントエンドではないかもしれない