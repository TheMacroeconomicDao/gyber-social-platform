import{ FC } from 'react'
import { Logo } from 'shared/ui/logo'
import { LangButton } from 'shared/ui/buttons/langButton'
import { NButton } from 'shared/ui/buttons/NButton'
import styles from './styles.module.scss'

export const Header:FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo/>

                <div className={styles.authWrap}>
                    <LangButton/>
                    <NButton/>
                </div>
            </div>
        </header>
    )
}
