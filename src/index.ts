export function useProvider<T>(values: T[], func: (params: T) => void): void {
  values.forEach((value) => func(value));
};
