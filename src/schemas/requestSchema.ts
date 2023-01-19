import * as yup from 'yup';

const requestSchema = yup.object({
  amount: yup
    .number()
    .min(1000, 'Amount must be at least 1000.')
    .required("Missing 'amount' property."),
  installments: yup
    .number()
    .integer('Installments must be a round number.')
    .min(1, 'Minimum number of installments is 1.')
    .max(12, 'Maximum number of installments is 12.')
    .required("Missing 'installments' property."),
  mdr: yup
    .number()
    .min(0, 'Mdr must be a positive number.')
    .max(100, 'Mdr cannot be greater than 100')
    .required("Missing 'mdr' property."),
});

export default requestSchema;
