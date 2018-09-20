import * as iconsFile from '!raw-loader!../../src/assets/icons/yarn-icon.svg';

const NAME_ATTR = 'glyph-name';
const CODE_ATTR = 'unicode';
const NAME = `${ NAME_ATTR }="[\\w\\d-_]+"`;
const CODE = `${ CODE_ATTR }="&#x[a-f\\d]+;"`;

const iconDefinitions = iconsFile.match(new RegExp(`<glyph\\s+${ CODE }\\s+${ NAME }`, 'gi'));

export const icons = iconDefinitions.map((iconDefinition) => {
  const [ nameAttr ] = iconDefinition.match(new RegExp(NAME, 'gi'));
  const [ codeAttr ] = iconDefinition.match(new RegExp(CODE, 'gi'));

  const name = nameAttr.replace(new RegExp(`${ NAME_ATTR }="`), '').replace(/"/, '');
  const code = `\\${ codeAttr.replace(new RegExp(`${ CODE_ATTR }="&#x`), '').replace(/;"/, '') }`;

  return {
    name,
    code
  };
});
