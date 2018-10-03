import { style } from '~/services/style';

let mobileBreakpoint = 0;

if (process.browser) {
  mobileBreakpoint = parseInt(style.variable['screen-xs-max']);
}

export function isMobile() {
  let mobile = false;

  if (process.browser) {
    const { clientWidth } = window.document.body;
    const fontSize = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'));

    mobile = clientWidth <= fontSize * mobileBreakpoint;
  }

  return mobile;
}
