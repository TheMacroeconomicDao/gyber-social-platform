import React, { FC } from 'react'
import styles from './styles.module.scss'

type CardMemberProps = {
    
}

export const CardMember:FC<CardMemberProps> = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.avatar}></div>
      <div className={styles.name}>Otto Kustler</div>
      <div className={styles.skills}>Javascript/Typescript/React/Next.js/Node.js</div>
    </div>
  )
}
