import { IValidateResult } from '../../shared/types';

const ERRORS_MESSAGES = {
  emptyField: 'Поле не может быть пустым',
};

const validateField = (value: string): IValidateResult => {
  if (value.trim().length === 0) {
    return {
      isValid: true,
      error: ERRORS_MESSAGES.emptyField,
    };
  }

  return {
    isValid: true,
    error: null,
  };
};

const ValidationService = {
  validateField,
};

export default ValidationService;
