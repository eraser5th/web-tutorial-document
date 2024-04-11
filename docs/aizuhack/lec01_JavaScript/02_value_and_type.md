# 基礎的なデータ型

JavaScriptが扱う値にはいくつか種類（型）がある。中でも基本的なものを紹介します。

## number

数値を扱う型

<iframe
  src="https://stackblitz.com/edit/js-dy2pnr?devToolsHeight=33&embed=1&file=index.js&hideExplorer=1&hideNavigation=1"
  width="100%"
  height="500px"
  title="stupefied-sutherland-jdtqvf"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## string

文字列を扱う型

シングルクォーテーション(`'`)かダブルクォーテーション(`"`)で囲む。

<iframe
  src="https://stackblitz.com/edit/js-9zva55?devToolsHeight=33&embed=1&file=index.js&hideExplorer=1&hideNavigation=1"
  width="100%"
  height="500px"
  title="stupefied-sutherland-jdtqvf"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::info
#### コラム「数（数値）と数字の違い」

数（数値）と数字とは**全く異なる**ものです。

まず、数（数値）における１とはモノの数を表したり、重さを表したり、いろいろするものです。

対して、数字の１はただの文字です。それそのものには数の１としての意味はなく、人間がそこに意味を見出します。

証拠として、`1`と`一`と`Ⅰ`とは数（数値）としてみた時には同じものです。しかしこれらは文字としてみた時には全く違うものとして扱われます。

これを機に、数（数値）と数字を厳密に区別して扱う様にしてみてください。これはプログラミングでもその他の部分でも役に立つと思います。

- 参考 [【連載：数学と言葉】第2回　数の言葉使いその2　数と数字のちがい説明できますか](https://www.study1.jp/pass/?p=451)
    - 数と数値の違いについても説明されているので気になる方は読んでみてね
:::

## boolean

真偽値を扱う型。

真偽値は`true`(真)と`false`(偽)の二つの値のみからなる。  
基本的に、`true`は「正しい」といった意味で使われ、`false`はその逆である。

```javascript
let bool = true
bool = false
```

<iframe
  src="https://stackblitz.com/edit/js-mxszqh?devToolsHeight=33&embed=1&file=index.js&hideExplorer=1&hideNavigation=1"
  width="100%"
  height="500px"
  title="stupefied-sutherland-jdtqvf"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

