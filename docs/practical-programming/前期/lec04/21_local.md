# ローカルで作業を行う

GitHub 上でファイル編集などができましたが、開発ではローカルで作業を行う場合が多いです  
そのため、GitHub 上のリポジトリをローカルに持ってくる必要があります  
また、編集などを行った後は GitHub 上のリポジトリに変更を適用させることができます(自分の PC で作業を行っただけでは GitHub 上に反映されない)

今から行う手順は以下の通りです

1. SSH 認証
1. `git clone`
1. ローカルで作業
1. `git push`

## SSH(Secure Shell)認証

リポジトリをクローンする(ローカルに持ってくる)際、HTTPS URL もしくは SSH URL を使用することができます

この実践的プログラミングの授業では SSH URL を使用するので SSH 認証が必要です

SSH 認証のやり方については以下の記事を参考にしながら行ってみてください

- [GitHub で ssh 接続する手順~公開鍵・秘密鍵の生成から~](https://qiita.com/shizuma/items/2b2f873a0034839e47ce)

<details><summary>詳細な情報</summary>

- [リモートリポジトリについて](https://docs.github.com/ja/get-started/getting-started-with-git/about-remote-repositories#cloning-with-ssh-urls)
- [SSH を使用した GitHub への接続](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh)

</details>

## `git clone`

先程作成したリポジトリに行き、緑色の「Code」ボタンから Git リモート URL をコピーします

![github-remote-url](/img/practical-programming/first/lec04/github-remote-url.png)

その後、ターミナルで以下のコマンドを打ってください  
(Git リモート URL についてはよしなに置き換えてください)

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

いくつか Tips(小ワザ)を紹介します

`git commit -m "ここにコミットメッセージ" -m "さらなる付属説明"`のように、`-m`で指定したコミットメッセージの後にさらに付属の説明を付け加えることができます

また、`git commit -m "#20"`のように issue 番号を入れることで、コミットメッセージからリンクが貼られます

![github-commit-message-link](/img/practical-programming/first/lec04/github-commit-message-link.png)

他にも色々あると思うので気になった方は調べてみてください

</details>

## `git push`

冒頭で説明があった通り、ローカルでの変更を GitHub 上のリモートリポジトリに反映させることができます

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

実際に GitHub 上で変更が反映されていれば OK です 🎉
