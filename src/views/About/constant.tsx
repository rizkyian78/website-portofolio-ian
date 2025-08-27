import {
  GithubFilled,
  LinkedinFilled,
  MailFilled,
  MediumCircleFilled,
} from '@ant-design/icons'

import cx from 'classnames'
import cssHeader from './About.module.scss'

export interface IHomeData {
  icon: React.ReactElement
}
export const data: IHomeData[] = [
  {
    icon: (
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rizkyian78@gmail.com`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailFilled className={cx(cssHeader.icon)} />
      </a>
    ),
  },
  {
    icon: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@rizkyian78"
      >
        <MediumCircleFilled className={cx(cssHeader.icon)} />
      </a>
    ),
  },
  {
    icon: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rizkyian78"
      >
        <GithubFilled className={cx(cssHeader.icon)} />
      </a>
    ),
  },
  {
    icon: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rizky-ian-indiarto-123rzky/"
      >
        <LinkedinFilled className={cx(cssHeader.icon)} />
      </a>
    ),
  },
]
