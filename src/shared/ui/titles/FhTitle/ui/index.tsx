import { FC } from 'react'
import styles from './styles.module.scss'

type FhTitleProps = {
    text: string
}

export const FhTitle:FC<FhTitleProps> = ({text}) => {
  return (
    <h3 className={styles.title}>
        {text}
    </h3>
  )
}
