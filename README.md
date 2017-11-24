# WWA FanSquare Webサイト
WWA FanSquareのWebサイトです。

# クラス名について
クラス名の命名規則はBEMを利用しています。

ページ独自の項目を指定したい場合は、以下の単語と重複しないように指定します。

## 全ページ共通
- `header` はヘッダーを定義します。
- `main` は内容を定義します。
- `footer` はフッターを定義します。

## 汎用
- `content-width` はコンテンツの最大幅を定義します
- `menu` はメニューを定義します。
  - `menu--wide` で幅広くなります。
  - `menu__item` で項目一つを指定します。
    - `menu__item--icon` でアイコンの項目を指定します。
- `icon` はテキスト付きのアイコンを定義します。
  - `icon__img` でアイコンそのものを指定します。
  - `icon__title` でタイトルを指定します。
  - `icon__link` でリンクを指定します。
- `share-btn` は共有できるボタンを定義します。
  - `share-btn--twitter` でTwitterのツイートボタンを指定します。
  - `share-btn--facebook` でFacebookのシェアボタンを指定します。
- `section` はページの1セクションを定義します。
  - `section--padding` で余白が上下に付きます。
  - `section__title` でタイトルを指定します。
- `top-text` は大きな空間に収められる大きなテキストボックスを定義します。
- `logo-image` はタイトルのロゴを定義します。

## MDLと併用
- `card-container` でカードを入れる要素を定義します。
  - `card-container--bottom-btn` でカード内のボタンが下部に配置されます。
- `social-btn` は Material Design Lite に対応するソーシャルボタンを指定します。
  - `social-btn-container` で各項目を囲めます。
  - `social-btn--twitter` でTwitterのボタンになります。

## 使用例
```html
<div class="about-wwa section">
  <h2 class="section__title">WWAについて</h2>
  <div class="section__content">
    ...
  </div>
</div>
```