export const requiredFields = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLength = (maxLengthValue) => {
  return (value) => {
    if (value.length > maxLengthValue) {
      return `The length of the string must be shorter than ${maxLengthValue} characters`;
    }
    return undefined;
  };
};
