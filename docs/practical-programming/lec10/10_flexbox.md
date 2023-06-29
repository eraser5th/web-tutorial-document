# フレックスボックスについて(前回の補足)

前回の授業でフレックスボックスについて軽く触れましたが、実際にどう使うのかについての説明はほとんどを[フレックスボックス](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Flexbox)のページに丸投げしていました

今回も基本的に参照する形で説明しますが、補足などはここに載せていきます

## フレックスコンテナーとフレックスアイテム

これは、[フレックスボックス](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Flexbox)の「柔軟な箱としてレイアウトする要素を指定」の章の補足です

`justify-content: center`などのプロパティはフレックスコンテナーに沿って、フレックスアイテムの配置を決めます  
つまり、フレックスコンテナーとフレックスアイテムが必要になるわけです

`display: flex`というプロパティによって、フレックスコンテナーとフレックスアイテムを作ることができます

例えば以下のように書くことで、クラス`aiueo`がフレックスコンテナー、クラス`kakikukeko`と`sasisuseso`がフレックスアイテムとなります

```html
<div class="aiueo">
  <div class="kakikukeko"></div>
  <div class="sasisuseso"></div>
</div>
```

```css
.aiueo {
  display: flex;
}
```

ここで重要なのは、**フレックスコンテナーが親要素、フレックスアイテムが子要素**であることを認識することです

例えばフレックスアイテムを中央揃えにしたいのであれば、`justify-content: center`と`align-items: center`を使用するのがその方法の一つですが、それらはフレックスコンテナーに対して適用すべきです

```html
<div class="aiueo">
  <div class="kakikukeko"></div>
  <div class="sasisuseso"></div>
</div>
```

```css
.aiueo {
  display: flex;
  justify-content: center;
  align-items: center;
}
```