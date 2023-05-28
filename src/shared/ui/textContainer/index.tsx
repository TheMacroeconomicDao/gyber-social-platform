import React, {FC} from 'react'
import styles from './styles.module.scss'

type TextContainerProps = {
    children: React.ReactNode
    m?: string
    gap?: number
}

export const TextContainer:FC<TextContainerProps> = ({children, m, gap}) => {
  return (
    <section 
        className={styles.wrap}
        style={{ 
            margin: m,
            gap: gap
        }}
    >
        {children}
    </section>
  )
}
