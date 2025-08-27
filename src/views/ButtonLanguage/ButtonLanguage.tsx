import { Button } from 'antd'
import cx from 'classnames'
import { CSSProperties } from 'react'
import cssHeader from './ButtonLanguage.module.scss'
import { IButtonLanguage } from './constant'

function ButtonLanguage({ name, style }: IButtonLanguage) {
  let newStyle: CSSProperties
  if (!style) {
    newStyle = {
      ...style,
      marginLeft: 10,
      marginBottom: 10,
    }
  }
  return (
    <Button
      className={cx(cssHeader.buttonCode)}
      style={{
        ...newStyle,
      }}
    >
      <span style={{ backgroundColor: 'transparent' }}>{name}</span>
    </Button>
  )
}

export default ButtonLanguage
