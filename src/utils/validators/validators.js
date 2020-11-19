export const required = value => {
    return !value && 'field is required';
  };
  
  export const minLengthCreator = minLength => value => {
    return value.length < minLength && `min length is ${minLength} symbols`;
  };
  
  export const maxLengthCreator = maxLength => value => {
    return value.length > maxLength && `max length is ${maxLength} symbols`;
  };
  
  export const email = value => {
    return (
      value &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
      'is invalid'
    );
  };
  
  