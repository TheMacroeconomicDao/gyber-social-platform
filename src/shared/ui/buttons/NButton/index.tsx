'use client'
import React, { FC } from 'react'
import styles from './styles.module.scss'

interface NButtonProps {
  text: string
}

export const NButton:FC<NButtonProps> = ({text}) => {
  return (
    <button className={styles.nbutton}>
      {text}
    </button>
  )
}
