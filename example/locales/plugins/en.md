**YARN** can be extended using plugins, this is necessary because the plugins are customizations for non built-in elements and third party libraries.

### Plugin guidelines

The goal of a plugin is to enhance **YARN** with non built-in HTML elements, because the main library
must not depende on third party libraries or non standard elements.

The requirements of the plugin are:

- Follow the **YARN** design: sizes, colors, etc.
  - The core library exposes the variables in LESS and SASS formats to be able to use them to compile the plugin source code.
- Technical requirements:
  - Create a unique CSS class which customizes the whole component.
    - It has to depend on `.yarn` global class.
  - The component has to be flexible.
  - The sizes has to be defined using relative units:
    - `em`/`rem` are based on the font size, which is the rule followed in **YARN**.
    - Avoid absolute units but for non dynamic stuff, such as borders.

**_Note:_** **YARN** applies some rules to the basic HTML elements, so it is important to test the customization loading **YARN** in the test page.

#### Example

Example of source code written in LESS format:

```css
// variables.less
// -------------------------------
@import '~@adidas/yarn-design-system/src/less/variables/main.less';

@color: @blue-100;
@opacity-disabled: .5;

// component-name.less
// -------------------------------
.component-name {
  color: @color;
  display: block;

  &__header {
    background-color: @primary-darkgray;
    font-weight: 700;
  }

  &__container {
    &--disabled {
      opacity: @opacity-disabled;
    }
  }
}

// main.less
// -------------------------------
@import 'variables.less';

.yarn {
  @import 'component-name.less';
}
```

### Available plugins

List of **YARN** compatible plugins.

#### ChoicesJS Stencil Web Component

Plugin for [ChoicesJS Stencil][choicesjs-stencil] Web Component. It adds the class `.choicesjs-stencil` as part of `.yarn` main class.

[ChoicesJS][choicesjs] is a library to enhance the HTML select and input elements without dependencies.

Check all its features on the [documentation page][adidas-plugin-choicesjs-stencil-documentation].

[adidas-plugin-choicesjs-stencil-documentation]: http://adidas.github.io/adidas-yarn-plugin-choicesjs-stencil/
[adidas-style-guide]: https://github.com/adidas/adidas-contribution-guidelines/wiki/Coding-style-guidelines
[choicesjs]: https://joshuajohnson.co.uk/Choices/
[choicesjs-stencil]: https://github.com/adidas/choicesjs-stencil
