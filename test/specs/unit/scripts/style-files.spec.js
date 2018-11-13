const path = require('path');
const mock = require('mock-fs');
const { readStyleVariables } = require('../../../../scripts/style-files');

describe('Style files', () => {
  const stylePath = 'src/style-path';
  const variablesFile = 'file-vars.less';
  const noVariablesFile = 'file-no-vars.less';

  beforeAll(() => {
    mock({
      [stylePath]: {
        [variablesFile]: `
          @var1: 2rem;
          @var2: center;
          @var3: @var1;
        `,
        [noVariablesFile]: ''
      }
    });
  });

  afterAll(() => {
    mock.restore();
  });

  describe('readStyleVariables()', () => {
    it('should return no style if there is no variables in the file', () => {
      expect(readStyleVariables(path.join(stylePath, noVariablesFile))).toEqual({});
    });

    it('should return an object with the style files', () => {
      expect(readStyleVariables(path.join(stylePath, variablesFile))).toEqual({
        var1: '2rem',
        var2: 'center',
        var3: '2rem'
      });
    });
  });
});
