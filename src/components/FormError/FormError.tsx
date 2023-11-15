import { FC } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './FormError.module.scss'

type IProps = {
  errors: Record<string, FieldError>
  name: string
}

export const FormError: FC<IProps> = ({ errors, name }) => {
  return (
    <>
      {errors[name] && (
        <div className={styles.error}>{errors[name]?.message}</div>
      )}
    </>
  )
}
