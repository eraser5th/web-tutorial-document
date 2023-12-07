# 前回のおさらい

## PackageとModule

GoのPackageとModuleについて学びました

![packages](/img/practical-programming/second/lec07/packages.png)

![modules](/img/practical-programming/second/lec07/modules.png)

## JSON

JSONというデータの形式についても学びました

```json
{
  "name": "matumoto",
  "age": 21,
  "nickname": "matumoto1234",
  "male": true,
  "skills": [
    "Go",
    "JavaScript",
    "C++",
  ],
  "friend": {
    "name": "eraser",
    "nickname": "eraser5th",
  },
  "𝕏": "matumoto_1234",
  "GitHub": "matumoto1234",
  "Facebook": null,
}
```

## GoでのJSON

GoでJSONを扱うために`encoding/json`という標準パッケージを用いて、`json.Unmarshal`を使用しました  
(`json.Unmarshal`は`[]byte`をJSONの構造体に変換する関数)
