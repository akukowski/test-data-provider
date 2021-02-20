import { useProvider } from '../index';

interface ProviderData {
  value: string;
};

describe('useProvider', () => {
  const expactCallParams = (callbackFunction: jest.Mock) => {
    const position = callbackFunction.mock.calls.map(single => single[0]);
    return expect(position);
  };
  test('no call function when values is empty', () => {
    // Arrange
    const values: ProviderData[] = [];
    const callbackFunction = jest.fn();

    // Act
    useProvider(values, callbackFunction);

    // Assert
    expect(callbackFunction).not.toBeCalled();
  });

  test('one call function when one item', () => {
    // Arrange
    const firstElement = {
      value: 'test'
    };
    const values: ProviderData[] = [firstElement];
    const callbackFunction = jest.fn();

    // Act
    useProvider(values, callbackFunction);

    // Assert
    expect(callbackFunction).toBeCalled();
    expactCallParams(callbackFunction).toEqual([firstElement]);
  });

  test('two call function when two item', () => {
    // Arrange
    const firstElement = {
      value: 'test'
    };
    const secondElement = {
      value: 'test2'
    };
    const values: ProviderData[] = [firstElement, secondElement];
    const callbackFunction = jest.fn();

    // Act
    useProvider(values, callbackFunction);

    // Assert
    expect(callbackFunction).toBeCalledTimes(2);
    expactCallParams(callbackFunction).toEqual([firstElement, secondElement]);
  });
});