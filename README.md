# spellingTable.js
カタカナのスペル対応表(Object)

```js
{
    // ア行
    'a': 'ア',
    'i': 'イ',
    'u': 'ウ',
    'e': 'エ',
    'o': 'オ',
    // カ行
    'ka': 'カ',
    'ki': 'キ',
    'ku': 'ク',
    'ke': 'ケ',
    'ko': 'コ',
    
    // 省略
    
    // ピャ行
    'pya': 'ピャ',
    'pyi': 'ピィ',
    'pyu': 'ピュ',
    'pye': 'ピェ',
    'pyo': 'ピョ',
    // フョ
    'fyo': 'フョ',
};
```

## npm
### Install
```sh
npm i spellingTable.js
```
### Usage
```js
import SpellingTable from 'spellingTable.js';
let katakana = SpellingTable.getKatakana();
```

## browser
### load
```html
<!-- htmlファイル -->
<script src="dist/spellingTable.js"></script>
```

## Usage
```js
let katakana = SpellingTable.getKatakana();
```
