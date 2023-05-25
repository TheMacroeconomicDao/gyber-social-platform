'use client'
import React, { FC } from 'react'
import styles from './styles.module.scss'

interface NButtonProps {
    
}

export const NButton:FC = () => {
  return (
    <button className={styles.nbutton}>
        Registration
    </button>
  )
}
