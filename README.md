# WWA FanSquare Webサイト
WWA FanSquareのWebサイトです。

## クラス名について
クラス名の命名規則はBEMを利用しています。

- `fansq-` から始まるブロックのクラス名は、主にヘッダーやフッターに使う全ページ共通のレイアウトになります
- `page-` から始まるブロックのクラス名は、各ページで使うレイアウトになります。
- `content-width` はコンテンツの最大幅を定義します
- `wide-menu` は横幅に広いメニューを定義します。
  - `wide-menu__item` で項目一つを指定します。
- `icon` はテキスト付きのアイコンを定義します。
  - `icon__img` でアイコンそのものを指定します。
  - `icon__title` でタイトルを指定します。
  - `icon__link` でリンクを指定します。
- `social-btn` は Material Design Lite に対応するソーシャルボタンを指定します。
  - `social-btn-container` で各項目を囲めます。
  - `social-btn--twitter` でTwitterのボタンになります。
- `section` はページの1セクションを定義します。
  - `section--no-padding` で余白がなくなります。
  - `section__title` でタイトルを指定します。
- `top-text` は大きな空間に収められる大きなテキストボックスを定義します。

## 使用例
```html
<div class="page-about-wwa section">
  <h2 class="section__title">WWAについて</h2>
  <div class="section__content">
    ...
  </div>
</div>
```