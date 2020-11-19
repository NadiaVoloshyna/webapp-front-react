import {
    email,
    maxLengthCreator,
    minLengthCreator,
    required
  } from './validators';
  
  export const BOUNDARY = {
    MAX_LENGTH: 100,
    MIN_LENGTH: 4,
    MIN_LENGTH_NAME: 2,
  };
  
  export const minLength = minLengthCreator(BOUNDARY.MIN_LENGTH);
  export const maxLength = maxLengthCreator(BOUNDARY.MAX_LENGTH);
  const minLengthName = minLengthCreator(BOUNDARY.MIN_LENGTH_NAME);
  
  export const VALIDATION_RULES = {
    NAME: [required, minLengthName, maxLength],
    EMAIL: [required, minLength, maxLength, email],
    PASSWORD: [required, minLength, maxLength],
    PHONE: [minLength, maxLength]
  };