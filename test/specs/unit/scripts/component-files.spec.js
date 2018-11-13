const mock = require('mock-fs');
const { readComponents } = require('../../../../scripts/component-files');

describe('Component files', () => {
  const componentsPath = 'src/components-path';
  const noComponentsPath = 'src/other-path';

  beforeAll(() => {
    mock({
      [noComponentsPath]: {
        'file-1.ext': '',
        'file-2.ext': '',
        'file-3.ext': '',
        'file-4.ext': ''
      },
      [componentsPath]: {
        'component-1.vue': '',
        'component-2.vue': '',
        'component-3.vue': '',
        'file-1.ext': '',
        'file-2.ext': ''
      }
    });
  });

  afterAll(() => {
    mock.restore();
  });

  describe('readComponents()', () => {
    it('should return no components if the path does not have components', () => {
      expect(readComponents(noComponentsPath)).toEqual([]);
    });

    it('should return the list of components of the path', () => {
      expect(readComponents(componentsPath)).toEqual([
        'component-1',
        'component-2',
        'component-3'
      ]);
    });
  });
});
