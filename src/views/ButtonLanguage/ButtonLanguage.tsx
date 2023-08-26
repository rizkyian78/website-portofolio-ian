import { Button } from 'antd'
import cx from 'classnames'
import cssHeader from './ButtonLanguage.module.scss'
import { IButtonLanguage } from './constant'

function ButtonLanguage({ name }: IButtonLanguage) {
  return (
    <Button
      className={cx(cssHeader.buttonCode)}
      style={{
        marginLeft: 10,
        marginBottom: 10,
      }}
    >
      <span style={{ backgroundColor: 'transparent' }}>{name}</span>
    </Button>
  )
}

export default ButtonLanguage
