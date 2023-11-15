import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Обязательное поле')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Некорректный email'
    ),
  password: yup
    .string()
    .required('Обязательное поле')
    .matches(/^[a-zA-Z0-9]*$/, 'Пароль может содержать только буквы и цифры')
    .min(6, 'Пароль должен иметь более 6 символов'),
})
