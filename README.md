# AngularJS Placeholder Polyfill 0.15

### This is an AngularJS directive which allows to use placeholder attribute in unsupported browsers, ex. IE8/IE9. Inspired by 'Placeholder Enhanced' https://github.com/dciccale/placeholder-enhanced

## Features

- Cross-browser & Cross-styling
- Support for all input types, password, textarea, text, email, search, url, etc...
- Watch model, so placeholder updates,as model is changed outside.

*Requires jQuery 1.4.4 or higher*

## Usage

Just include the js file after AngularJS on your HTML page and the directive will be automatically initialized

```html
<script src="jquery.js"></script>
<script src="angular.js"></script>
<script src="angular.placeholder.polyfill.js"></script>
...
<input type="text" name="name" placeholder="e.g. Viktor Shevchenko">
<input type="email" name="email" placeholder="e.g. vict.shevchenko@example.abc">
<input type="url" name="url" placeholder="e.g. http://victshevchenko.ua/">
<input type="tel" name="tel" placeholder="e.g. +380 67 123 456 7">
<input type="password" name="password" placeholder="e.g. h68*JK456d">
<input type="search" name="search" placeholder="Search this site�">
<textarea name="comment" placeholder="Please, write your comment here"></textarea>
```

## CSS

Customize the style of the placeholder with CSS in a cross-browser manner:

See [placeholder.css](https://github.com/vict-shevchenko/angular-placeholder-polyfill/blob/master/placeholder.css)

## Demo

For a demo see **[online](http://vict-shevchenko.github.com/angular-placeholder-polyfill/)**

## TODO
- Optimise
- Bug fixes
- Create a demo

## License

See [LICENSE.txt](https://github.com/vict-shevchenko/angular-placeholder-polyfill/blob/master/LICENSE.txt)
