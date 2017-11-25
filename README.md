# WWA FanSquare Webサイト
WWA FanSquareのWebサイトです。

# クラス名について
クラス名の命名規則はBEMを利用しています。

ページ独自の項目を指定したい場合は、以下の単語と重複しないように指定します。

- `fansq` はWWAFanSquareのページそのものを定義します。
  - `fansq__header` でヘッダーを指定します。
  - `fansq__main` で内容を指定します。
  - `fansq__footer` でフッターを指定します。

## 汎用
- `content-width` はコンテンツの最大幅を定義します。
  - `content-width--text` でテキスト中心のページに適した幅にします。
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
  - `section__description` で説明を指定します。
  - `section__content` で内容を指定します(ただし内容が `card-container` の場合は指定する必要はありません)。
- `top-text` は大きな空間に収められる大きなテキストボックスを定義します。
- `logo-image` はタイトルのロゴを定義します。
- `date` で日付を定義します。
  - `date__text` で日付そのものを指定します。
- `page-list` はページの一覧を定義します。
  - `page-list__card` でページ一項目のカードを指定します。
- `topic` はトップページで目立つテキストを定義します。
  - `topic__text` でテキストを指定します。

## MDLと併用
- `card-container` でカードを入れる要素を定義します。
  - `card-container--bottom-btn` でカード内のボタンが下部に配置されます。
- `card` でカードを定義します。
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