import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

interface IProps {
  children: ReactNode
  variable: string
  disabled: boolean
}

export const Button: FC<IProps> = ({ variable, children, disabled }) => {
  return (
    <button
      className={`${styles.button} ${styles[variable]}`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  )
}
