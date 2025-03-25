import cls from './Glow.module.scss'

export const Glow = () => {
  return (
    <div className={cls.GlowContainer}>
      <div className={`${cls.Glow} ${cls.blue}`} />
      <div className={`${cls.Glow} ${cls.yellow}`} />
      <div className={`${cls.Glow} ${cls.green}`} />
      <div className={`${cls.Glow} ${cls.red}`} />
    </div>
  )
}
