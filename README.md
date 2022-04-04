# test-data-provider [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
Do not duplicate same tests to check different parameters, use the data provider. The package is universal and can be used with test libraries as [jasmine](https://jasmine.github.io), [jest](https://jestjs.io), [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/), [enzyme](https://enzymejs.github.io/enzyme/).

## Installation
[![npm version](https://badge.fury.io/js/test-data-provider.svg)](https://badge.fury.io/js/test-data-provider)
```javascript
npm install --save-dev test-data-provider
```

## How use
```javascript
  import { useProvider } from 'test-data-provider';
  
  describe('test section', () => {
    const dataProvider = [
      {
        a: 0,
        b: 1,
        expected: 1,
        description: 'returns 1 when 0 is added 1',
      },
      {
        a: 1,
        b: 2,
        expected: 3,
        description: 'returns 3 when 1 is added 2',
      }
    ];
    useProvider(dataProvider, ({ description, a, b, expected }) => {
      test(description, () => {
        expect(a + b).toBe(expected);
      });
    });
  });
```
