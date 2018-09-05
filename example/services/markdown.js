import { get } from 'lodash';

const { markdown } = process.env;

export function getMarkdownFile(name, lang) {
  return get(markdown, `${ name }.${ lang }`);
}
