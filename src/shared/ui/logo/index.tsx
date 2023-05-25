import React, { FC } from 'react'
import styles from './styles.module.scss'

interface LogoProps {
  width: number,
  height: number,
  background: string,
  logoColour: string,
  text: string,
  textColor: string,
  hidenText: boolean,
}

export const Logo:FC<Partial<LogoProps>> = (props) => {
  const {
    width = 40, 
    height = 40, 
    background = "#F1F0F0",
    logoColour = "#CCFF00",
    text = "Gyber",
    textColor = "#ffffff",
    hidenText = false,
  } = props 

  return (
    <div className={styles.logoWrap}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 58 73" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M2.8883 53.5619L2.70376 16.7215L29.3327 2.66978L55.3825 23.0194L55.6491 53.2975L29.9253 69.9871L13.9401 57.4865L14.2407 24.8515L28.8768 17.667L43.9749 29.5875L44.1147 45.4615L29.7959 55.289L25.0666 52.3908L24.8855 31.8135L29.5604 28.5385" 
          stroke="#CCFF00" 
          strokeWidth="4.44231"
        />
      </svg>

      {
        hidenText 
          ? <></>
          : <span 
              className={styles.text}
              style={{
                color: textColor
              }}
            >
              {text}
            </span> 
      }
    </div>
  )
}
