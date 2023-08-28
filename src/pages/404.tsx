import cx from 'classnames'
import cssHeader from './404.module.scss'

export default function FourOhFour() {
  return (
    <div className={cx(cssHeader.container)}>
      <p className={cx(cssHeader.iconText)}>
        404 | This Page Could Not Be Found
      </p>
    </div>
  )
}
