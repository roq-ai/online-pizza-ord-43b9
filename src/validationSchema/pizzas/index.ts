import * as yup from 'yup';

export const pizzaValidationSchema = yup.object().shape({
  name: yup.string().required(),
  ingredients: yup.string().required(),
  price: yup.number().integer().required(),
  size: yup.string().required(),
});
