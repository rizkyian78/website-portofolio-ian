import {
  GithubFilled,
  InstagramOutlined,
  LinkedinFilled,
  MediumCircleFilled,
} from '@ant-design/icons'

import cx from 'classnames'
import cssHeader from './About.module.scss'

export interface IHomeData {
  icon: React.JSX.Element
}
export const data: IHomeData[] = [
  {
    icon: <InstagramOutlined className={cx(cssHeader.icon)} />,
  },
  {
    icon: <MediumCircleFilled className={cx(cssHeader.icon)} />,
  },
  {
    icon: <GithubFilled className={cx(cssHeader.icon)} />,
  },
  {
    icon: <LinkedinFilled className={cx(cssHeader.icon)} />,
  },
]
