import React, { FC } from 'react'
import styles from './styles.module.scss'

type NTextProps = {
    text: string
}

export const NText:FC<NTextProps> = ({text}) => {
  return (
    <p className={styles.text}>
        {text}
    </p>
  )
}
