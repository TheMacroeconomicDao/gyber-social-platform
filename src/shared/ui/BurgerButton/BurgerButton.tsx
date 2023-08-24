"use client"
import { useState } from "react"
import { Button, ThemeButton } from "../Button/Button"
import BurgerIcon from "../SvgIcons/BurgerIcon/Burger"
import cls from './BurgerButton.module.scss'


const BurgerButton = () => {
    const [isActive, setIsActive] = useState(false);
  return (
    <Button className={cls.BurgerBtn} onClick={() => setIsActive(!isActive)} theme={ThemeButton.BLUE}>
        <BurgerIcon active={isActive}/>
    </Button>
  )
}

export default BurgerButton