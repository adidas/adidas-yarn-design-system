![](./logo.png)

# adidas Yarn Design System

**YARN** is a frontend toolkit for developing with HTML, CSS and JS with adidas style. It provides the base layout for frontend applications.

- Header: it is shown fixed at the top of the screen, it is used to display branding information and always visible links. It can also be used to display a small navigation bar.
- Tabbar: below the header, it is behaviour is similar to a horizontal navigation list.
- Toolbar: below the tabbar, it is used to display buttons to perform different operations related to the context of the current page.
- Sidebar: it is located on the left part of the screen.
- Footer: it is shown fixed at the bottom of the screen.
- Main container: it fits the available screen between the header/tabbar/toolbar and the footer. It is the only container which should be able to scroll.

**YARN** is based on [Bootstrap v3][bootstrap], which is a front-end framework used to define HTML elements
like grids, typography, inputs and other  interface components, as well as optional JS extensions.

Currently **YARN** has two different views:

- Mobile version: `screen width < 980px`.
    - Left sidebar and tabbar components are hidden by default.
- Desktop version `screen width >= 980px`.

## Use cases

The purpose of this library is to provide CSS classes to customize frontend applications with adidas style.

The package provides the compiled code in CSS format, as well as the source code in LESS format. Both can be
used to customize the style of any frontend application, without being compiled, respectively.

The list of use cases is endless, so, some of them could be:

- To create a flexible design based on the root font size of the document, so the application can adapt the size of the elements to that font size without using JavaScript.
- To enhance a basic application adding the fixed header and footer with some information and links which will be always visible.
- To add a navigation tree or menu in the application on the left side of the screen using the sidebar.

adidas is not responsible for the usage of this software for different purposes that the ones described in the use cases.

## Requirements and dependencies

[NodeJS and NPM][node] are required to work with the repository.

Ther are no runtime dependencies, because, despite the fact that this library is based on Bootstrap, the source
code has been compiled along with Bootstrap.

On the other hand, the use can redefine the fonts to be displayed, read [font definitions](#font-definitions) section.

## Installation and running

- In development mode:
    ```
    npm install
    ```
- Run time:
    ```
    npm install @adidas/yarn-design-system
    ```

Load the library files in the HTML of your application:

```html
<!-- YARN core -->
<link rel="stylesheet" href="node_modules/@adidas/yarn-design-system/dist/yarn.css">

<!-- YARN assets -->
<link rel="stylesheet" href="node_modules/@adidas/yarn-design-system/dist/yarn-icon.css">
<link rel="stylesheet" href="node_modules/@adidas/yarn-design-system/dist/yarn-logo.css">

<!-- YARN JavaScript functions (optional) -->
<script type="text/javascript" href="node_modules/@adidas/yarn-design-system/dist/yarn.js">
```

Or import them in your preprocessed CSS files with `@import`:

```css
@import '~@adidas/yarn-design-system/dist/yarn.css';
@import '~@adidas/yarn-design-system/dist/yarn-icon.css';
@import '~@adidas/yarn-design-system/dist/yarn-logo.css';
```

Or load them using [webpack][webpack] or another similar tool.

Once the files have been loaded, in order to enable **YARN**, the main `yarn` class have to be placed
in the `<body/>` element of the page.

```html
<body class="yarn">
  <div class="page-container">
    <header class="header"></header>
    <div class="tabbar"></div>
    <div class="toolbar"></div>
    <main class="main">
      <div class="sidebar"></div>
      <div class="container"></div>
    </main>
    <footer class="footer"></footer>
  </div>
</body>
```

### Font definitions

**YARN** is using three different font families, one of them for the two most important headings and the other one for the rest of headins and the normal text: _heading_, _base_ and _monospace_ respectively.

These three font families are just names to be defined accordingly via `@font-face` rule.

The recommended font for these three families are:

- `yarn-heading`: [_Poppins_][poppins].
- `yarn-base`: [_Roboto_][roboto].
- `yarn-monospace`: [_Roboto Mono_][roboto-mono].

There are several ways to define the **YARN** fonts:

- Generic fonts: in order to avoid issues, three generic fonts have been set.
- Included fallback: fonts definition using local installed fonts.
- Specific fonts file: it has to include the definitions pointing to online files or local files.

#### Specific fonts

Working with more than one font in **YARN** requires not only to download the font definitions but to
map those definitions to the **YARN** fonts.

The way to do it is using static CDN files or local files, to be able to point to them in a
safe way. [GitHub][open-source-typefaces] (via NPM) provides a lot of open source typefaces (MIT license) which can be loaded as local files in `woff` and `woff2` formats, which are compatible with modern browsers.

1. Fonts installation:
    ```
    npm install typeface-poppins typeface-roboto typeface-roboto-mono
    ```
2. Font definitions file loaded within the project files:
    - Do not forget to include the local fallbacks.
    - If the file is processed by `webpack`, the fonts can be pointed using: `~typeface-NAME/files/FONT-FILE`.
    ```css
    @font-face {
    font-family: 'yarn-heading';
    font-weight: lighter;
    font-style: normal;
    src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'),
      url(node_modules/typeface-poppins/files/poppins-latin-200.woff) format('woff'),
      url(node_modules/typeface-poppins/files/poppins-latin-200.woff2) format('woff2');
    text-transform: uppercase;
    }

    @font-face {
    font-family: 'yarn-base';
    ...
    }

    @font-face {
    font-family: 'yarn-monospace';
    ...
    }
    ```

See how a font definitions file has been created in the [**YARN** documentation page](example/styles/fonts.less).

### Browser Compatibility

**YARN** is compatible with most common browsers.

|         | Chrome | Firefox | Safari | Internet Explorer | Microsoft Edge | Opera |
|:-------:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| macOS   | Supported | Supported | Supported | N/A       | N/A       | Supported |
| Windows | Supported | Supported | N/A       | Supported | Supported | Supported |

|         | Chrome | Firefox | Safari | Android & WebView | Opera |
|:-------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| Android | Supported | Supported | N/A       | Supported | Supported |
| iOS     | Supported | Supported | Supported | N/A       | Supported |

## Building

The library consists of two parts:

- The style source code, which is code of the library itself.
- The example to show the different parts of the library.

Both are independent and they have different scripts to run them.

- Library:
    ```
    npm run build
    ```
- Example:
    ```
    npm run build:example
    ```

The library is compiled in the `dist` folder, whereas the example is created in the `docs` folder.

### Example as Single Page Application

The example can be delivered as [Single Page Application][single-page-application] using the script `npm run build:example:spa`, executed after building the library. It accepts two environment variables:

- `HOST`: host where the application will be deployed, the protocol should be omitted.
- `BASE`: path where the application will be available.

Example deploying the application in `https://name.domain:port/app`:

```
HOST=//name.domain:port BASE=app npm run build:example:spa
```

### Documentation

The documentation is generated using the script `doc`, which generates the example in [SPA][single-page-application] mode. It also accepts the environment variables.

```
HOST=//name.domain:port BASE=app npm run doc
```

## Development

The script to develop this project have to be executed in different terminals because they have to be
continuously running checking changes.

- Library:
    ```
    npm run start:lib
    ```
- Example:
    ```
    npm run start:example
    ```

Once the library is ready, and the example has been built, the application is ready in localhost: `http://localhost:3000`.

The scripts are waiting for changes in the source code to rebuild the library and the example. Each time
a change is ready, the browser will update the page without reloading it, using [Hot Module Replacement][webpack-hot-module-replacement].

### Working with the library

The library source code is inside the `src` folder, with LESS and JS files and some assets. The LESS code
is divided in:

- Basics: basic CSS components.
- Components: complex CSS components.
- Mixins: functions to provide some custom CSS based on input parameters.
- Variables: the list of variables used in the source code as well as colors and typography.

Everything is imported from the main `yarn.less` file (icons and logos from `yarn-icon.less` and
`yarn-logo.less` respectively).

### Style Guide

**YARN** library follows the [adidas coding style guidelines][adidas-style-guide].

#### File naming

Every component has its own LESS file and the names follow `kebab-case` format.

#### Class naming

The LESS/CSS files follow the [BEM][bem] methodology identifying the **B**lock, **E**lement and
**M**odifier key elements and then inserting them into the HTML DOM.

Classes should have meaningful and self explanatory names, using `kebab-case` format.

BEM strict naming rules can be found in [BEM naming][bem-naming] document.

### Working with the example

The example code has been written using [Nuxt][nuxt], which is the Server Side Rendering framework
of [Vue.JS][vuejs].

The code is located in the `example` folder and follows the Nuxt guidelines.

The texts and documents are located in `example/locales` to be able to show the page in different
languages. The `.md` files contain the content of full pages, while the `[lang].json` files have only
titles and common words.

### Code linting

The LESS and the Vue source code are linted using the adidas [stylelint][stylelint] and
[ESLint][eslint] linter configurations respectively.

There are separated scripts to lint the different sources and a global one to execute all together:

```
npm run lint
```

_Note:_ it is mandatory to fix all the issues before pushing the code.

## FAQ

### Maintainers

Check the contributor list and you will be welcome if you want to contribute.

### Contributing

Check out the [CONTRIBUTING.md](.github/CONTRIBUTING.md) to know how to contribute to this project.

## License and Software Information

© adidas AG

adidas AG publishes this software and accompanied documentation (if any) subject to the terms of the MIT license with the aim of helping the community with our tools and libraries which we think can be also useful for other people. You will find a copy of the MIT license in the root folder of this package. All rights not explicitly granted to you under the MIT license remain the sole and exclusive property of adidas AG.

NOTICE: The software has been designed solely for the purpose of giving some CSS classes to customize frontend applications with the adidas style. The software is NOT designed, tested or verified for productive use whatsoever, nor or for any use related to high risk environments, such as health care, highly or fully autonomous driving, power plants, or other critical infrastructures or services.

If you want to contact adidas regarding the software, you can mail us at _opensourcesoftware@adidas.com_.

For further information open the [adidas terms and conditions][terms-and-conditions] page.

### License

[MIT](LICENSE)

[adidas-style-guide]: https://github.com/adidas/adidas-contribution-guidelines/wiki/Coding-style-guidelines
[bootstrap]: https://getbootstrap.com/docs/3.3/
[bem]: http://getbem.com/introduction/
[bem-naming]: http://getbem.com/naming/
[eslint]: https://eslint.org/
[node]: https://nodejs.org/
[nuxt]: https://nuxtjs.org/
[open-source-typefaces]: https://github.com/KyleAMathews/typefaces
[poppins]: https://fonts.google.com/specimen/Poppins
[roboto]: https://fonts.google.com/specimen/Roboto
[roboto-mono]: https://fonts.google.com/specimen/Roboto+Mono
[single-page-application]: https://en.wikipedia.org/wiki/Single-page_application
[stylelint]: https://stylelint.io/
[terms-and-conditions]: https://github.com/adidas/adidas-contribution-guidelines/wiki/Terms-and-conditions
[vuejs]: https://vuejs.org/
[webpack]: https://webpack.js.org/
[webpack-hot-module-replacement]: https://webpack.js.org/concepts/hot-module-replacement/
