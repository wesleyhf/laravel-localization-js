# laravel-localization-js

Easy way to handle Laravel's lang.json in Javascript. :earth_americas:

Inspired by [Ziggy](https://github.com/tightenco/ziggy) and based on Laravel way to [Retrieving Translation Strings](https://laravel.com/docs/7.x/localization#retrieving-translation-strings).

## Why

Manipulating translations strings at Javascript when you are using Laravel should not be so tricky. So, why not use the `lang.json` file that is already at your back-end?

## Contents

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Installation

Just run:

```sh
npm install @wesleyhf/laravel-localization-js --save

# or using yarn

yarn add @wesleyhf/laravel-localization-js
```

## Setup

```js
import { createLaravelLocalization } from 'laravel-localization-js';
import lang from '../../lang/pt-br.json';

const __ = createLaravelLocalization(lang);

console.log(__('Hello world')); // output: Olá mundo
```

## Usage


```js
// example of lang.json
{
    'My name is Wesley': 'Meu nome é Wesley',
    'My name is :name': 'Meu nome é :name',
};

// undefined key
__('Hello world'); // 'Hello world'

// defined key
__('My name is Wesley'); // 'Meu nome é Wesley'

// peplacing parameters
__('My name is :name', { 'name': 'Wesley' }); // 'Meu nome é Wesley'
```

## License

[MIT License](LICENSE) © Wesley Francisco
