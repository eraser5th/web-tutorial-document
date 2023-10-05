# クラス設計

フレックスボックスでは親要素、子要素を意識して CSS を適用させますが、そもそもクラスが親要素と子要素で正しく分けられていないと適用したくても適用できないことがあります

そのため、HTML 側のクラス分け(クラス設計と言うのが一般的)のいくつかについて話していきます

## 階層構造を意識する

例えば、以下のような YouTube の動画説明部分を作成したい場合、どういう構造にしたら良いでしょうか？

![youtube](/img/practical-programming/first/lec10/youtube.png)

より簡単にするために、一旦チャンネルアイコン部分は考えずに他 3 つの部分について着目してみます

- 動画タイトル
- チャンネル名
- 再生回数・投稿されてからの時間

この 3 つを表現するには階層構造として、クラス`movieDescription`があったとしてその子要素に動画タイトル、チャンネル名などをいれていけば上手くいけそうです  
具体的には以下のような感じです

```html
<div class="movieDescription">
  <div class="movieDescription-title">動画のタイトル</div>
  <div class="movieDescription-channel">チャンネル名</div>
  <div class="movieDescription-viewAndDateTime">
    再生回数・投稿されてからの時間
  </div>
</div>
```

ここに文字の大きさや色を CSS で調節すると以下のようなものにできます

![simple-description](/img/practical-programming/first/lec10/simple-description.png)

チャンネルアイコン部分については、あたらしくクラスを作り、先程作ったものとくっつければ上手くいきそうです  
しかし、それだけではアイコン用のクラスと`movieDescription`をフレックスアイテムとして使うことができません  
そこで、それらの親要素を作って階層をさらに作ります  
具体的には以下のような感じです

```html
<div class="movieItem">
  <div class="movieItem-icon"></div>
  <div class="movieItem-description">
    <div class="movieItem-description-title">動画のタイトル</div>
    <div class="movieItem-description-channel">チャンネル名</div>
    <div class="movieItem-description-viewAndDateTime">
      再生回数・投稿されてからの時間
    </div>
  </div>
</div>
```

ここに文字の大きさや色を CSS で調節すると以下のようなものにできます

![with-icon](/img/practical-programming/first/lec10/with-icon.png)

※ちなみに、これが正しい！というわけではなく表現の方法は何通りもあります。実際に作る際は自分なりに、どうしたらわかりやすいコードになるのかを意識して考えてみましょう
