# UNIXコマンド

## UNIXコマンドとは

LinuxやMacなどのUNIX系OSでTerminalを操作するためのコマンド群

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
ls
```

### pwd

pwd(print working directory)コマンド  
今いる場所がどこか表示する

```bash
pwd
```

### cd

cd(change directory)コマンド  
指定した場所に移動する

```bash
# /home/matumotoに移動するときのコマンド
cd /home/matumoto
```

### mkdir

mkdir(make directory)コマンド  
ディレクトリ[^1]を作成する

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
# aaaというファイルを削除する
rm aaa
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

<details><summary>コラム</summary>

色んな記事などを見ていると「パス(PATH)を通す」という言葉がよく使われますが、どういう意味か知っていますか？  
ちなみに、自分は大学に入るまで知りませんでした  
以下の記事など読むとわかりやすいのでぜひ読んでみてください

- [PATHを通す | 「分かりそう」で「分からない」でも「分かった」気になれるIT用語辞典](https://wa3.i-3-i.info/word18471.html)

ちなみに、おそらく後々の演習でパスを通す作業が出てくるかも...?

</details>

[^1]: 複数のファイルをまとめておけるもの。「フォルダ」と同じ
