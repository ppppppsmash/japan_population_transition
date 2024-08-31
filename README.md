# 日本の人口推

***プロジェクト名：日本の人口推移を可視化するReact SPAです。***

---

## 技術スタック

- React
- TypeScript
- Vite (SWCコンパイラー)
- CSS [^1]
[^1]: CSSのネスト記法を使用してスタイルを適用します

---

## 利用ライブラリ
### データ可視化のグラフライブラリ
- Highcharts
- Highcharts-react-official

### テストライブラリ
- jest
- react-testing-library [^2]
[^2]: JestとReact Testing Libraryを使用してテストします

### フォーマットライブラリ
- Prettier

## 開発環境のセットアップ

1. リポジトリのクローン
   ```
   git clone [リポジトリのURL]
   ```

2. 依存関係のインストール
   ```
   npm install
   yarn install
   pnpm install
   ```

3. 開発サーバーの起動：
   ```
   npm run dev
   yarn dev
   pnpm dev
   ```

---

## 他の利用可能なスクリプト

- `npm run dev`: 開発サーバーを起動します
- `npm run build`: プロダクション用にアプリケーションをビルドします
- `npm run lint`: ESLintを使用してコードをリントします
- `npm run preview`: ビルドされたアプリケーションをプレビューします
- `npm run format`: Prettierを使用してコードをフォーマットします

---

## 参考URL
### スタック
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

### データ、API関連
- [RESAS API](https://opendata.resas-portal.go.jp/)
- [RESAS API 仕様書](https://opendata.resas-portal.go.jp/docs/api/v1/index.html)

### グラフ関連
- [Highcharts](https://www.highcharts.com/)
- [Highcharts-react-official](https://github.com/highcharts/highcharts-react)

### フォーマット関連
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### トラブルシューティング
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
