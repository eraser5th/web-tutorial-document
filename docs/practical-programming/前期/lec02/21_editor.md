# エディタ

第一回の授業で VSCode というエディタを入れてもらいましたが、ここではその使い方を説明していきます

## VSCode の使い方

VSCode を開くと以下のような画面になっていると思います

![vscode-open-now](/img/practical-programming/first/lec02/vscode-open-now.png)

この状態から実際にファイルを編集する手順を説明していきます

### ファイルを作成して編集する

左側のファイルアイコンをクリックするとサイドバーが開きます

![vscode-open-sidebar](/img/practical-programming/first/lec02/vscode-open-sidebar.png)

サイドバーにある「Open Folder」という青いボタンをクリックして、作業したいフォルダ(ディレクトリ)を開きます  
画像では code_box/example/というフォルダを開いていますが、別途新しくフォルダを作っていただいて大丈夫です

![vscode-open-folder](/img/practical-programming/first/lec02/vscode-open-folder.png)

次に、サイドバーのフォルダ名にマウスを持っていき、アイコンをクリックしてファイルを新規作成します  
ここでは、index.html というファイルを作ってみましょう

![vscode-make-file](/img/practical-programming/first/lec02/vscode-make-file.png)

次に以下の内容を index.html 内に記述します  
(コピペしてもらって大丈夫です)

なお、HTML については次回以降の授業で詳しく説明するので、今回は説明を省略します

```html
<!DOCTYPE html>
<html>
  <!-- <head> 内ではWebページの表示名、ロゴ、CSSの読み込みなど、設定の様なことを行う -->
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>

  <!-- <body> 内ではWebページの構造、コンテンツを表記する -->
  <body>
    <h1>this is a lv.1 heading</h1>
  </body>
</html>
```

![vscode-write-html](/img/practical-programming/first/lec02/vscode-write-html.png)

ファイルに変更を加えただけで保存はされていないので、左上の File から Save を行います  
(ctrl+s などのショートカットだったり、自動保存の設定が用いられたりすることが多いです)

![vscode-save-file](/img/practical-programming/first/lec02/vscode-save-file.png)

### 拡張機能を入れてみる

次に、拡張機能を VSCode に入れてみます

拡張機能とは、文字通り VSCode の機能を拡張するもので、左側の四角がいくつかあるアイコンから入手できます

![vscode-open-extensions](/img/practical-programming/first/lec02/vscode-open-extensions.png)

実際に、HTML Preview という拡張機能を入れてみましょう  
検索欄に「HTML Preview」と入力して一番上に出てきたものをインストールします  
※非推奨(deprecated)になっていない中で

![vscode-install-html-preview](/img/practical-programming/first/lec02/vscode-install-html-preview.png)

では、HTML のプレビュー機能を使ってみます  
先程の HTML ファイルに戻り、右上のアイコンをクリックしてプレビュー画面を開いてみましょう

![vscode-use-html-preview](/img/practical-programming/first/lec02/vscode-use-html-preview.png)

プレビュー画面を開いた状態で HTML ファイルの`this is a lv.1 heading`の部分を`hello!`に変更してみましょう  
すると、プレビュー画面の方も変更されたと思います

![vscode-update-html](/img/practical-programming/first/lec02/vscode-update-html.png)

### おすすめの拡張機能

- Trailing Spaces
  - 末尾の空白をハイライトしてくれる
- Explicit Folding
  - コードの折りたたみを設定できる
- vscode-icons
  - ファイル表示の部分にアイコンがつくようになる
- Code Runner
  - ショートカットでコードの実行を行うことができる
- Code Spell Checker
  - コードのスペルが正しくない場所を教えてくれる
- Error Lens
  - エラー表示をいい感じにしてくれる
- GitHub Copilot
  - GitHubCopilot を使った保管が可能になる。最高
- Live Share
  - ペアプログラミングとかするときに便利
- Live Server
  - ローカルでサーバーを簡易的に立てたいときに便利
