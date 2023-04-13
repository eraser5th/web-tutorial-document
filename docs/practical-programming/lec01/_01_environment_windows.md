**WSL** (Windows Subsystem for Linux)をインストールします

Windows の標準で使えるターミナルには、コマンドプロンプト、PowerShell などが存在しています  
 ただし、それらでは Windows コマンドを主に扱っていて、UNIX コマンドがほとんど使えません

個人的な主観ではありますが、一般的な Web アプリケーションの開発では UNIX コマンドを用いることが多い印象があります  
 今後個人開発するときにも役立つと思うのでこの際にインストールしてしまいましょう！

### インストール方法

[公式ドキュメント](https://learn.microsoft.com/ja-jp/windows/wsl/install)を参照してください

<details><summary>コラム：WSLのバージョンについて</summary>

実は WSL1,WSL2 というバージョンが存在しています  
詳しくは以下のリンクを見てみてください

- [WSL バージョンの比較](https://learn.microsoft.com/ja-jp/windows/wsl/compare-versions)

雑に紹介すると、WSL1だとWindows-Linux間のファイルやり取りが速くて、Linux-Linux間のファイルやり取りが遅いです  
WSL2はその逆で、Windows-Linux間のファイルやり取りが遅くて、Linux-Linux間のファイルやり取りが速いです

個人的にはWSL2のまま運用して、Linux側にコードとかを置いておくのがおすすめです  
(Linuxで開発した方がなにかと便利なので)

</details>
