## what does yarn mean for a developer?

For developers, using the **YARN** framework ensures speed and efficiency. Having a set of components already working and with the correct style, means that the developer just has to build them to have a great layout.

**YARN** also gives confidence to developers, knowing that there is a dedicated team behind these components means that they can be trusted.

Since **YARN** is on [GitHub][yarn], a developer is able to get involved and suggest feedback to the maintainers, with the possibility of helping the system to grow.

## explore the guidelines

**YARN** provides detailed style guidelines and coding for working interactive components. Assets for the components can be downloaded below and examples of code can be found within each component page.

## get started

**YARN** is a frontend toolkit for developing with HTML, CSS and JS based on [Bootstrap v3.3.7](https://getbootstrap.com/docs/3.3/).

Bootstrap is a front-end framework used to define HTML elements like grids, typography, inputs and other interface components, as well as optional JS extensions.

Currently **YARN** has two different views based on the default font size of `16px`.

- Mobile version: `screen width < 60rem` (`960px`).
  - Left sidebar and tabbar components are hidden by default.
- Desktop version `screen width >= 60rem` (`960px`).

## installation

**YARN** requires NodeJS and NPM tools:

- [NodeJS](https://nodejs.org) version 8 recommended.
- NPM version 5 (included with NodeJS).

Install by running the following command in terminal:

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

## font definitions

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
  - [GitHub][open-source-typefaces] (via NPM) provides a lot of open source typefaces which can be loaded as local files.

## GitHub

**YARN** is available on [GitHub adiads-yarn-design-system][yarn].

Fork it and play!

[open-source-typefaces]: https://github.com/KyleAMathews/typefaces
[poppins]: https://fonts.google.com/specimen/Poppins
[roboto]: https://fonts.google.com/specimen/Roboto
[roboto-mono]: https://fonts.google.com/specimen/Roboto+Mono
[webpack]: https://webpack.js.org/
[yarn]: https://github.com/adidas/adidas-yarn-design-system
