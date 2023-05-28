import { FC } from 'react'
import styles from './styles.module.scss'

type FTitleProps = {
    text: string
}

export const FTitle:FC<FTitleProps> = ({text}) => {
  return (
    <h1 className={styles.title}>
        {text}
    </h1>
  )
}
