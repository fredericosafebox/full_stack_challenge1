import * as yup from 'yup';

const requestSchema = yup.object({
  amount: yup
    .number()
    .min(1000, { type: 'amount', msg: 'Amount must be at least 1000.' })
    .required({ type: 'amount', msg: "Missing 'amount' property." }),
  installments: yup
    .number()
    .integer({
      type: 'installments',
      msg: 'Installments must be a round number.',
    })
    .min(1, {
      type: 'installments',
      msg: 'Minimum number of installments is 1.',
    })
    .max(12, {
      type: 'installments',
      msg: 'Maximum number of installments is 12.',
    })
    .required({
      type: 'installments',
      msg: "Missing 'installments' property.",
    }),
  mdr: yup
    .number()
    .min(0, { type: 'mdr', msg: 'Mdr must be a positive number.' })
    .max(100, { type: 'mdr', msg: 'Mdr cannot be greater than 100' })
    .required({ type: 'mdr', msg: "Missing 'mdr' property." }),
  days: yup.array().of(
    yup
      .number()
      .integer({
        type: 'days',
        msg: 'A day must be a round number.',
      })
      .min(0, {
        type: 'days',
        msg: 'Minimum number for a day is 0.',
      })
  ),
});

export default requestSchema;
