# GitHub

GitHub って？  
→ ソフトウェア開発のプラットフォームのこと

基本的にソースコードとかを置いておきます(前回作ったリポジトリをリモートリポジトリとして管理したりする)

![github-first-view](/img/practical-programming/first/lec04/github-first-view.png)

## GitHub に登録

GitHub に登録しましょう

使用する名前やメールアドレスに特に制限はないので、個人のメールアドレスとかを使ってもらって大丈夫です！

## GitHub リポジトリを作成して色々試す

GitHub 上にリポジトリを作成して色々行ってみます

今から行う手順は以下のとおりです

1. GitHub 上でリポジトリを作成
1. GitHub 上で作業

### GitHub 上でリポジトリを作成

GitHub に登録できたら、右上のアイコンからメニューを開いて「Your repositories」を選択してください

![github-menu](/img/practical-programming/first/lec04/github-menu.png)

そうしたら、緑色の「New」ボタンからリポジトリを作成してください

![github-new-repository](/img/practical-programming/first/lec04/github-new-repository.png)

次のような画面に遷移しますが、各選択項目の内容は以下に従ってください 🙏🏻

- リポジトリの名前
  - 特に指定は無いです！
- 説明
  - 特に指定は無いです！
- 公開設定
  - public でお願いします！
- README を追加するか
  - **追加する**(「Add README file」にチェックを入れてください)
- .gitignore を追加するか
  - しない
- license を追加するか
  - しない

![github-creating-repository](/img/practical-programming/first/lec04/github-creating-repository.png)

### GitHub 上で作業

実際に GitHub 上でファイルをいじってみましょう

README.md というファイルをいい感じに編集してみてください  
(ペンの形をしたアイコンから編集できます)

![github-readme](/img/practical-programming/first/lec04/github-readme.png)

編集できたら、右上の「Commit changes」と書かれた緑色のボタンを押します  
(これで commit できます)

![github-edit-readme](/img/practical-programming/first/lec04/github-edit-readme.png)

こんな感じで確認用ダイアログが出てくるので「Commit changes」を押します  
(コミットメッセージなど好きに変えてみてもらって大丈夫です！)

![github-update-readme](/img/practical-programming/first/lec04/github-update-readme.png)

実際に見てみるとちゃんと適用されています

![github-done-edit-readme](/img/practical-programming/first/lec04/github-done-edit-readme.png)

このボタン ![github-commit-tree-button](/img/practical-programming/first/lec04/github-commit-tree-button.png) から、コミット履歴を確認できます

![github-commit-history](/img/practical-programming/first/lec04/github-commit-history.png)

[^1]: ちなみにこの作業はあらかじめ GitHub 上でリポジトリを作成して、`git clone`した方が手っ取り早いです
