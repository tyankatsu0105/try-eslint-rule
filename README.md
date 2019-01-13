eslint の rule を試しに作っていきます。
作り方を学ぶ用のリポジトリです。

# 使い方

```bash
$ yarn add eslint @tyankatsu0105/eslint-plugin -D
```

```json
{
  "plugins": ["@tyankatsu0105"],
  "env": {
    "node": true
  },
  "rules": {
    "@tyankatsu0105/no-literal-call": 2,
    "@tyankatsu0105/no-var": 2
  }
}
```
