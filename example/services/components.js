import get from 'lodash.get';

export function getComponents(name) {
  const { components } = process.env;

  return get(components, name, []);
}
