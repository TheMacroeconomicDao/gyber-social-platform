import React, {FC} from 'react'
import styles from './styles.module.scss'

type ContainerProps = {
    children: React.ReactNode
    m?: string
    gap?: number
}

export const Container:FC<ContainerProps> = ({children, m, gap}) => {
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
