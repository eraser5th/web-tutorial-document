---
---

# 値の比較

2つの値の大小関係や等しいかどうかを調べる。
結果として、`boolean`（真偽値）を返します。

- `===`
  - 等しい場合`true`、そうでない場合`false`
- `!==`
  - 等しくない場合`true`、そうでない場合`false`
- `<`
  - 左の値が右の値より小さい場合`true`、そうでない場合`false`
- `<=`
  - 左の値が右の値より小さいか等しい場合`true`、そうでない場合`false`
- `>`
  - 左の値が右の値より大きい場合`true`、そうでない場合`false`
- `>=`
  - 左の値が右の値より大きいか等しい場合`true`、そうでない場合`false`

:::warning
JavaScriptの比較演算子には`==`と`!=`が存在するが、基本的にこれらは使わないほうが良い。
理由や違いについては「[JavaScript 忘れがちな　=== と == の違い](https://qiita.com/PianoScoreJP/items/e43d70ec188c6fed73ed)」などを参照すると良いでしょう。
:::

<iframe
  src="https://stackblitz.com/edit/js-ghagnn?devToolsHeight=33&embed=1&file=index.js&hideExplorer=1&hideNavigation=1"
  width="100%"
  height="500px"
  title="stupefied-sutherland-jdtqvf"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
