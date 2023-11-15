import { FC, useState } from 'react'
import {
  Controller,
  FieldError,
  FieldValues,
  useFormContext,
} from 'react-hook-form'
import { IoIosEyeOff, IoMdEye } from 'react-icons/io'
import { FormError } from '../FormError/FormError'

import styles from './PasswordInput.module.scss'

type IProps = {
  name: string
  label: string
}

export const PasswordInput: FC<IProps> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FieldValues>()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <label className={styles.label}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className={styles['input-container']}>
            <input
              className={styles.input}
              type={showPassword ? 'text' : 'password'}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder={label}
            />
            <button
              className={styles['button-img']}
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? <IoIosEyeOff /> : <IoMdEye />}
            </button>
          </div>
        )}
      />

      <FormError
        name={name}
        errors={errors as Record<string, FieldError>}
      />
    </>
  )
}
