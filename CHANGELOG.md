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
