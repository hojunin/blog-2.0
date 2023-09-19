export const extractValues = (entity: Record<string, any>, keys: string[]) => {
  return keys
    .map((key) => entity[key])
    .map((value) => {
      if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
      }
      return value;
    });
};
