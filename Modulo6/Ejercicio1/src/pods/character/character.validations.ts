import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';
import { minNumber } from '@lemoncode/fonk-min-number-validator';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    species: [Validators.required],
    status: [Validators.required],
    gender: [Validators.required],
  },
};

export const formValidation = createFormikValidation(validationSchema);
