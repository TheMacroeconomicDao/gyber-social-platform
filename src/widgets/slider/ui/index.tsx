'use client'
import React, { FC } from 'react'
import { FTitle } from 'shared/ui/titles/FTitle'
import styles from './styles.module.scss'

export const Slider:FC = () => {
  return (
    <section className={styles.wrap}>
        <FTitle 
          text='AiC (Artificial Intelligence and Blockchain Community)'
        />
        <div className={styles.sliderWrap}>
          <div className={styles.container}>
            Slider
          </div>
        </div>
    </section>
  )
}
