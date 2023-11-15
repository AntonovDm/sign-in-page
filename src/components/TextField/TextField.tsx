import { FC } from 'react'
import { FieldError, FieldValues, useFormContext } from 'react-hook-form'
import { FormError } from '../FormError/FormError'

import styles from './TextField.module.scss'

interface IProps {
  name: string
  label: string
}

export const TextField: FC<IProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>()

  return (
    <div className={styles['text-field']}>
      <label className={styles.label}>{label}</label>
      <input
        {...register(name)}
        placeholder={label}
        className={styles.input}
      />
      <FormError
        name={name}
        errors={errors as Record<string, FieldError>}
      />
    </div>
  )
}
