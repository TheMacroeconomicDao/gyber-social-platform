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
      {/* <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 419 419" fill="none">
        <circle cx="209.5" cy="209.5" r="209.5" fill={background}/>
        <g filter="url(#filter0_d_801_6)">
          <path d="M102.811 279.455L102.062 131.391L210.217 74.9158L316.021 156.703L317.103 278.393L212.624 345.47L147.699 295.229L148.92 164.066L208.365 135.191L269.688 183.1L270.255 246.899L212.099 286.397L192.89 274.749L192.155 192.047L211.142 178.884" stroke="white" strokeWidth="25"/>
        </g>
        <g filter="url(#filter1_d_801_6)">
          <path d="M102.811 279.446L102.062 131.381L210.217 74.906L316.021 156.693L317.103 278.383L212.624 345.46L147.699 295.219L148.92 164.056L208.365 135.181L269.688 183.091L270.255 246.89L212.099 286.387L192.89 274.739L192.155 192.037L211.142 178.874" 
            stroke={logoColour} 
            strokeWidth="16"
          />
        </g>
        <defs>
          <filter id="filter0_d_801_6" x="88.5234" y="60.1289" width="242.141" height="302.627" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_801_6"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_801_6" result="shape"/>
          </filter>
          <filter id="filter1_d_801_6" x="93.0371" y="65.4434" width="233.105" height="291.799" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_801_6"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_801_6" result="shape"/>
          </filter>
        </defs>
      </svg> */}

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
          stroke-width="4.44231"
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
