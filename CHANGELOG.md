- Fixed build script to run smoothly on Windows.
- Removed extra div in checkmark example.
- Removed left marging and padding for checkbox/radio inside a panel.
- Changed Travis configuration to publish on tags instead of on `master` branch.

# 1.5.0

- Updated tags component.
- Updated tiles component.
- Updated example with tags and tiles.
- Fixed minor issues in components.

### [ tags ]

- Added `.tag-list--horizontal`/`.tag-list--vertical` modifiers.
- Fixed tag style.
- Removed `.tags` class in favor of `.tag-list`.

### [ tiles ]

- Updated tile height and footer height values.
- Updated `.tile__main--flag` adding customization for YARN icons.
- Removed `.tile__footer` ellipsis and its hover behavior.
- Removed `.tile__main--app` class.
- Removed `.tile__footer__status` class and all its subclasses.
- Removed `.link` class customization inside `.tile__footer__text`.

### [ example ]

- Added tags component example.
- Added tiles component example.

# 1.4.0

- Fixed forms and controls.
- Fixed navigation tabs.
- Fixed minor style issues and variable values.
  - Components: articles, buttons, sidebar and tags.
- Added test tools using `jest`.
  -  Unit tests for application startup scripts.
- Added forms component example.
- Removed distributed `yarn.js` library because the lack of necessary functionaly.

### [ forms ]

- Added `--checkmark` modifier to customize checkboxes.
- Added `.form-inline` class.
- Fixed `.form-group`, `.control` classes and their subclasses.
- Removed `form-control__tag`, `form-control__tags` classes.
- Improved code of feedback classes using a mixin.

### [ input-groups ]

- Added `.input-group-addon--icon` class.

### [ navs ]

- Fixed navigation tabs and pills style.

### [ example ]

- Added forms component for input, checkbox, radio button and text area.
- Refactored pages layout using containers.

# 1.3.0

- Added ordered/unordered list style.
- Added documentation about plugins in the README file.
- Increased vertical margin for paragraph and header elements.
- Removed multiselect component.
  - Removed peer dependency `choicesjs-stencil`.

### [ markdown ]

- Added customization for ordered and unordered lists.

### [ multiselect ]

- Removed `.multiselect` class.

### [ palette ]

- Renamed classes according to their variable names for `color`, `background-color` and `border-color`:
  - `--nickel` to `--primary-nickel`.
  - `--darkgray` to `--primary-darkgray`.
  - `--gray` to `--primary-gray`.
  - `--lightgray` to `--primary-lightgray`.

### [ example ]

- Added plugins page with documentation and list of available plugins.
- Removed multiselect component page.
- Removed dependencies: `choicesjs-stencil` and `choices.js`.
- Added syntax highlight to the markdown renderer using `highlight.js` package.

## 1.2.1

- Updated ESLint to version 5.
  - Updated adidas configurations, base configurations and plugins.
- Updated stylelint to version 9.
  - Updated adidas configuration.
  - Added `stylelint-config-adidas-bem` configuration.

# 1.2.0

- Added `multiselect` less component.
- Added `choicesjs-stencil` library as dependency for multiselect components.
- Renamed `HOST` env variable to `HOSTNAME` in order not to overwrite it.
- Updated example.

### [ logos ]

- Renamed logos:
  - `yarn-logo adidas` -> `yarn-logo yarn-logo--adidas`.
  - `yarn-logo yarn` -> `yarn-logo yarn-logo--yarn`.

### [ multiselect ]

- Added `.multiselect` class to customize `choicesjs-stencil` web component with YARN style.

### [ palette ]

- Added classes to set the `border-color`.
- Renamed classes according to their variable names for `color` and `background-color`:
  - `--black` to `--primary-black`.
  - `--silver` to `--primary-silver`.
  - `--white` to `--primary-white`.

### [ variables ]

- Fixed values.
- Added `@font-size-x-small` and `@font-size-x-large`.

### [ example ]

- Added multiselect component page.

# 1.1.0

- Added mobile view for the main layout.
- Added new icons.
- Removed unnecessary classes for different components.
- Updated example.
  - Added sidebar behavior in desktop and mobile.
  - Dynamic calculation of mobile/desktop breackpoint using font size and LESS varibles file.
- Updated default font definitions.
- Updated example.

### [ icons ]

- Added `select-related` and `three-d` icons.
- Updated icon font definition using `woff`/`woff2` formats.
- Removed unnecessary font files.

### [ code ]

- Set default font family.

### [ basics ]

- Updated mobile/desktop breakpoint to be `60rem` (`960px`).
- Fixed `.main` style to be compatible with all browsers.

### [ footer ]

- Fixed desktop and mobile view.

### [ grid ]

- Added responsive rules for desktop and mobile.

### [ panels ]

- Removed `.panel-default` and subclasses.
- Updated style.


### [ tabbar ]

- Removed class: `.tablbar__search`.

### [ tile ]

- Improved hover behavior.

### [ toolbar ]

- Fixed `.toolbar__left`/`.toolbar__right` classes.
- Removed classes and subclasses:
  - `.toolbar--article`.
  - `.toolbar--mobile__icon-left`/`.toolbar--mobile__icon-right`.
  - `.toolbar--mobile__icon-left`/`.toolbar--mobile__icon-right`.
  - `.toolbar--right-menu`.
  - `.toolbar--scrolling`.
  - `.toolbar__calltoaction`.
  - `.toolbar__history-label`.
  - `.toolbar__link`.
  - `.toolbar__navbar`.
  - `.toolbar__notice`.
  - `.toolbar__toggle`.
  - `.toolbar__tooltip`.

### [ sidebar ]

- Removed classes and subclasses:
  - `.sidebar .control`.
  - `.sidebar__block`.
  - `.sidebar__controls`.
  - `.sidebar__form`.
  - `.sidebar__link`.
  - `.sidebar__tag`.
  - `.sidebar__tags`.
  - `.sidebar__title`.
  - `.sidebar--details-view`.
  - `.sidebar--filters`.
  - `.sidebar--scrolling`.
- Updated style.

### [ example ]

- Added sidebar behavior in desktop and mobile views.
- Added `less-vars-to-js` package to get style values in the view.
- Added a margin after the `main` container in the mobile view.
- Improved foundation icons page using the SVG icons file as source to get the list of icons.
- Updated example and its font definitions.

# 1.0.0

- First official release of adidas YARN Design System.
