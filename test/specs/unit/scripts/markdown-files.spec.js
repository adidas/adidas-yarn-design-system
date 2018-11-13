const mock = require('mock-fs');
const { readMarkdownFiles } = require('../../../../scripts/markdown-files');

describe('Markdown files', () => {
  const markdownPath = 'src/markdown-path';
  const noMarkdownPath = 'src/other-path';

  beforeAll(() => {
    mock({
      [noMarkdownPath]: {
        'file-1.ext': '',
        'file-2.ext': '',
        'file-3.ext': ''
      },
      [markdownPath]: {
        folder: {
          subfolder: {
            'file-1.md': '# file 1',
            'file-2.md': '# file 2',
            'file-3.md': '# file 3'
          }
        }
      }
    });
  });

  afterAll(() => {
    mock.restore();
  });

  describe('readMarkdownFiles()', () => {
    it('should return no markdown if the path does not have markdown', () => {
      expect(readMarkdownFiles(noMarkdownPath)).toEqual({});
    });

    it('should return an object with the markdown files', () => {
      expect(readMarkdownFiles(markdownPath)).toEqual({
        folder: {
          subfolder: {
            'file-1': '# file 1',
            'file-2': '# file 2',
            'file-3': '# file 3'
          }
        }
      });
    });
  });
});
