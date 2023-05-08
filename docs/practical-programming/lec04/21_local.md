# ローカルで作業を行う

GitHub上でファイル編集などができましたが、開発ではローカルで作業を行う場合が多いです  
そのため、GitHub上のリポジトリをローカルに持ってくる必要があります  
また、編集などを行った後はGitHub上のリポジトリに変更を適用させることができます(自分のPCで作業を行っただけではGitHub上に反映されない)

今から行う手順は以下の通りです

1. SSH認証
1. `git clone`
1. ローカルで作業
1. `git push`

## SSH(Secure Shell)認証

リポジトリをクローンする(ローカルに持ってくる)際、HTTPS URLもしくはSSH URLを使用することができます

この実践的プログラミングの授業ではSSH URLを使用するのでSSH認証が必要です

SSH認証のやり方については以下の記事を参考にしながら行ってみてください

- [GitHubでssh接続する手順~公開鍵・秘密鍵の生成から~](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)

<details><summary>詳細な情報</summary>

- [リモートリポジトリについて](https://docs.github.com/ja/get-started/getting-started-with-git/about-remote-repositories#cloning-with-ssh-urls)
- [SSHを使用したGitHubへの接続](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh)

</details>

## `git clone`

先程作成したリポジトリに行き、緑色の「Code」ボタンからGitリモートURLをコピーします

![github-remote-url](/img/practical-programming/lec04/github-remote-url.png)

その後、ターミナルで以下のコマンドを打ってください  
(GitリモートURLについてはよしなに置き換えてください)

```
# 作業したいディレクトリに移動する
cd ここに作業したいディレクトリ

# git cloneする(ディレクトリが作られる)
git clone ここにコピーしたGitリモートURL

# git cloneで作られたディレクトリに移動する
cd ここにリポジトリの名前
```

## ローカルで作業

実際にエディタなどを開いて作業してみましょう

今回は、index.html という名前のファイルを作って以下の内容を記述します  
(コピペしてもらって大丈夫です)

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
    <h1>Hello👋.</h1>
  </body>
</html>
```

これが終わったら`git add`, `git commit`を行います

```
git add index.html
git commit -m "ここにコミットメッセージ"
```

<details><summary>コラム : コミットメッセージ</summary>

いくつかTips(小ワザ)を紹介します

`git commit -m "ここにコミットメッセージ" -m "さらなる付属説明"`のように、`-m`で指定したコミットメッセージの後にさらに付属の説明を付け加えることができます

また、`git commit -m "#20"`のようにissue番号を入れることで、コミットメッセージからリンクが貼られます

![github-commit-message-link](/img/practical-programming/lec04/github-commit-message-link.png)

他にも色々あると思うので気になった方は調べてみてください

</details>

## `git push`

冒頭で説明があった通り、ローカルでの変更をGitHub上のリモートリポジトリに反映させることができます

以下のコマンドを実行してください

```
git push origin main
```

- `origin`
  - リモートリポジトリのことを指しています
  - `git clone`はデフォルトのリモートリポジトリ名`origin`を使用します
- `main`
  - ブランチのことを指しています
  - ブランチについては今後の授業内で触れていきます

実際にGitHub上で変更が反映されていればOKです🎉
