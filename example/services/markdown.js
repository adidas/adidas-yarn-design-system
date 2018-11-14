import get from 'lodash.get';

export function getMarkdownFile(name, lang) {
  const { markdown } = process.env;

  return get(markdown, `${ name }.${ lang }`);
}
