import { FC, ReactNode } from 'react'

import styles from './Header.module.scss'

interface IProps {
  children: ReactNode
}

export const Header: FC<IProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{children}</h1>
    </header>
  )
}
