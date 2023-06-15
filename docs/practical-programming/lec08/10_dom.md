# DOM(Document Object Model)

> DOM(Document Object Model)とは、ウェブ上の文書のコンテンツと構造からなるオブジェクトのデータ表現です([DOM の紹介 - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Introduction)より引用)

DOMはウェブページを表現したもので、JavaScriptから変更することができます  
しかし、またJavaScript言語の一部というわけではなく、PythonなどによってもDOMを操作することは可能です  
※あくまで、ウェブサイトを構築する際に使用されるWebAPIの一つです

例1. 読み込んだ際に`alert`を実行する

```html
<body onload="alert('ホームページへようこそ!');">
```

一般に、ページの構造（HTML で記述）と DOM の操作（JavaScript で記述）を混在させることは推奨されません  
よって、上記のような書き方は多用しないようにしましょう

## JavaScriptを使ったDOM操作

以下の資料をもとにDOM操作について学んでいきます

- [https://eraser5th.github.io/web-tutorial-document/docs/category/dom](https://eraser5th.github.io/web-tutorial-document/docs/category/dom)
