import { FC } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { validationSchema } from '../../utils/helpers/validationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordInput } from '../PasswordInput/PasswordInput'
import { TextField } from '../TextField/TextField'
import { Button } from '../Button/Button'
import { fetchData } from '../../api/FetchPostData'
import { Header } from '../Header/Header'

import styles from './UserForm.module.scss'

type IProps = {
  email: string
  password: string
}

export const UserForm: FC = () => {
  const methods = useForm<IProps>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: { email: '', password: '' },
  })

  const resetFunction = () => methods.reset()

  const onSubmit: SubmitHandler<IProps> = (data) => {
    fetchData(data, resetFunction)
  }

  return (
    <>
      <Header>Log in to your account</Header>
      <FormProvider {...methods}>
        <form
          className={styles.form}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TextField
            name="email"
            label="Email"
          />
          <PasswordInput
            name="password"
            label="Password"
          />

          <Button
            variable="submit"
            disabled={!methods.formState.isValid}
          >
            Sign in
          </Button>
        </form>
      </FormProvider>
    </>
  )
}
