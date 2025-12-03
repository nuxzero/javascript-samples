import * as yup from 'yup'
export const addressSchema = yup.object().shape({
  street: yup
    .string()
    .required('Street address is required')
    .trim(),

  city: yup
    .string()
    .required('City is required')
    .trim(),

  state: yup
    .string()
    .required('State is required')
    .trim(),

  zip: yup
    .string()
    .required('ZIP is required')
    .matches(/^\d{5}(-\d{4})?$/, 'ZIP code must be in format 12345 or 12345-6789'),

  country: yup.string()
    .required('Country is required')
    .trim(),
})

export type AddressFormData = yup.InferType<typeof addressSchema>
