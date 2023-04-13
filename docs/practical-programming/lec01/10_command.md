# UNIXコマンド

## UNIXコマンドとは

LinuxやMacなどのUNIX系OSでターミナルを操作するためのコマンド群

例. `cd`, `mkdir`, `pwd`, `ls`

## どんな場面で必要か？

基本的なターミナルの操作で必要になります

## UNIXコマンド実践

早速、いくつかのUNIXコマンドを使ってみましょう

以下にたくさん例をあげるので色々試してみてください  
また、時間が余った人は色んなコマンドについて調べてみてください

### ls

ls(list segments)コマンド  
今いる場所にあるファイル一覧を表示する

```bash
# 今いる場所のファイル一覧を表示する
ls

# 今いる場所のファイル一覧を隠しファイルも含めて表示する
ls -al
```

### pwd

pwd(print working directory)コマンド  
今いる場所がどこか表示する

```bash
pwd
```

### cat

cat(concatenate and print files)コマンド  
ファイルの中身を表示する

```bash
# aiueo.txtの中身を表示する
cat aiueo.txt

# aiueo.txt, aiueo2.txtの中身を連結して表示する
cat aiueo.txt aiueo2.txt
```

### cd

cd(change directory)コマンド  
指定した場所に移動する

```bash
# /home/matumotoに移動するときのコマンド
cd /home/matumoto
```

### mkdir

mkdir(make directories)コマンド  
ディレクトリを作成する

```bash
# 今いる場所にaaaaaという名前のディレクトリを作成する
mkdir aaaaa
```

### rmdir

rmdir(remove directory)コマンド  
空のディレクトリを削除する

```bash
# aaaaaという名前の中身が空のディレクトリを削除する
rmdir aaaaa
```

### rm

rm(remove)コマンド  
ファイルを削除する

```bash
# aaa.txtというファイルを削除する
rm aaa.txt

# bbbというディレクトリを中身も含めて再帰的に削除する
rm -r bbb
```

ちなみに、全てのファイルを削除するコマンド`rm -rf /`などがバルスとかって呼ばれてネタにされがちです

### find

findコマンド  
ファイルを検索する

```bash
# 今いるディレクトリ以下でaiueo.txtというファイルを検索する
find . -name aiueo.txt
```

### which

whichコマンド  
実行可能なコマンドがどこにあるか表示する

```bash
# lsコマンドがどこにあるか表示する
which ls
```

### echo

echoコマンド  
与えた文字列を表示する

```bash
# 「hello world」という文字列を表示する
echo "hello world"
```

<details><summary>「PATHを通す」について</summary>

色んな記事などを見ていると「パス(PATH)を通す」という言葉がよく使われますが、どういう意味か知っていますか？  
ちなみに、自分は大学に入るまで知りませんでした  
以下の記事など読むとわかりやすいのでぜひ読んでみてください

- [PATHを通す | 「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典](https://wa3.i-3-i.info/word18471.html)

ちなみに、おそらく後々の演習でパスを通す作業が出てくるかも...?

さらにちなみに、以下のコマンドを実行するとどこにPATHが通っているか確認できます

```bash
echo $PATH
```

</details>
