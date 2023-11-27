# Goについての周辺知識

前回 `go.mod` ファイルを作ってもらいましたが、そういった周辺知識の説明ができていなかったので今回は周辺知識について学びます  
こういった言語にまつわる周辺知識やツールのことを、エコシステムと呼んだりすることもあります

## Package

> Each package within a module is a collection of source files in the same directory that are compiled together.  
> ([Go Module Reference](https://go.dev/ref/mod#modules-overview)より引用)

モジュール内の各パッケージは、同じディレクトリにあるソースファイルの集まりで、一緒にコンパイルされます

つまり、パッケージはソースファイルの集まりなので図にするとこんな感じです

![packages](/img/practical-programming/second/lec07/packages.png)

よく使用される`net/http`や`fmt`などは標準のパッケージになります  
標準パッケージの他に、ユーザーが作成したパッケージを外部に公開することもでき、[https://pkg.go.dev/](https://pkg.go.dev/) などを用いて検索することができます

公開されているパッケージは`go get`コマンドや`go install`コマンドなどを用いてインストールすることができます
が、人が見てもわかる構造になっています

例

```bash
go get github.com/mattn/go-sqlite3
```

<details><summary><code>go get</code>コマンドと<code>go install</code>コマンドの使い分け</summary>

> The go get command updates module dependencies in the go.mod file for the main module, then builds and installs packages listed on the command line.  
> ([https://go.dev/ref/mod#go-get](https://go.dev/ref/mod#go-get)より引用)

`go get` コマンドは、メインモジュールの `go.mod` ファイルにあるモジュールの依存関係を更新し、コマンドラインにリストされたパッケージをビルドしてインストールする

つまり、`go get`コマンドは `go.mod` に記述されている依存関係を更新するときに使います  
公開されているパッケージを`import "fmt"`みたいな感じで自分のソースコード内でインポートしたいときなんかに使うと良いです

> The go install command builds and installs the packages named by the paths on the command line.  
> ([https://go.dev/ref/mod#go-install](https://go.dev/ref/mod#go-install)より引用)

`go install`コマンドは、コマンドライン上のパスで指定されたパッケージをビルドしてインストールする

`go install`コマンドは環境自体にパッケージをインストールします  
CLIとして公開されているもの(例. 静的解析ツールなど)をインストールしたいときなんかに使うとよいです

</details>

## Module

> A module is a collection of packages that are released, versioned, and distributed together.  
> ([Go Module Reference](https://go.dev/ref/mod#modules-overview)より引用)

モジュールとは、一緒にリリースされ、バージョン管理され、配布されるパッケージの集まりである

つまり、モジュールはパッケージの集まりなので図にするとこんな感じです

![modules](/img/practical-programming/second/lec07/modules.png)

モジュールの依存関係などを `go.mod` ファイルなどによって管理します  
npmとかでいうところの`pakcage.json`に近いです

また、`go.mod`ファイルがあるディレクトリがそのモジュールのルートディレクトリになります

`go mod init ここにモジュールパス名` とすることで `go.mod` ファイルが作成され、`go get`コマンドなどでパッケージをインストールする際に`go.mod`は自動更新されます
