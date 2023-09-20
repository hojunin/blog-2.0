export const extractValuesFromForm = (entity: FormData, keys: string[]) => {
  return keys
    .map((key) => entity.get(key))
    .map((value) => {
      if (typeof value === 'object' && value !== null) {
        return JSON.stringify(value);
      }
      return value;
    });
};

export const convertFormDataToObject = (formData: FormData) => {
  const object: Record<string, any> = {};

  formData.forEach((value, key) => {
    if (key.startsWith('$ACTION_ID')) {
      return;
    }
    if (object.hasOwnProperty(key)) {
      if (!Array.isArray(object[key])) {
        object[key] = [object[key]];
      }
      object[key].push(value);
    } else {
      object[key] = value;
    }
  });
  return object;
};
