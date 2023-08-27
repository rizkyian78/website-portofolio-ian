import { Column } from 'react-table-6'
import cx from 'classnames'
import cssHeader from './Table.module.scss'
import { Button, Row, Typography, Col } from 'antd'
import {
  brankasStack,
  pertaminVMI,
  restApiTemplateStack,
} from './dataSourceProject'
import ButtonLanguage from 'views/ButtonLanguage/ButtonLanguage'
import { IButtonLanguage } from 'views/ButtonLanguage/constant'
import IconExternal from '@nexys/components/Icon/external'
import { GithubFilled } from '@ant-design/icons'

interface IDataTable {
  year: string
  project: string
  madeAt: string
  builtWith?: React.ReactNode
  link: React.ReactNode
}

interface ILinkWeb {
  name: string
  icon: React.JSX.Element
  url: string
  isGitHub: boolean
}

const LinkWeb = ({ name, icon, url, isGitHub }: ILinkWeb) => {
  if (isGitHub) {
    return (
      <>
        <Row className={cx(cssHeader.link)}>
          <a href={url} className={cx(cssHeader.textTo)}>
            {name}{' '}
          </a>
          <Button
            style={{
              backgroundColor: 'transparent',
            }}
            className={cx(cssHeader.iconGithub)}
            type="text"
            size="small"
            icon={icon}
          />{' '}
        </Row>
      </>
    )
  }
  return (
    <>
      <Row className={cx(cssHeader.link)}>
        <a href={url} className={cx(cssHeader.textTo)}>
          {name}{' '}
        </a>
        <Button
          style={{
            backgroundColor: 'transparent',
          }}
          className={cx(cssHeader.iconLink)}
          type="text"
          size="small"
          icon={icon}
        />{' '}
      </Row>
    </>
  )
}

export const columns = [
  {
    Header: () => <Typography className={cx(cssHeader.title)}>Year</Typography>,
  },
  {
    Header: () => (
      <Typography className={cx(cssHeader.title)}>Project</Typography>
    ),
  },
  {
    Header: () => (
      <Typography className={cx(cssHeader.title)}>Made at</Typography>
    ),
  },
  {
    Header: () => (
      <Typography className={cx(cssHeader.title)}>Built with</Typography>
    ),
  },
  {
    Header: () => <Typography className={cx(cssHeader.title)}>Link</Typography>,
  },
]

export const data: IDataTable[] = [
  {
    year: '2021',
    project: 'Yokke Payment Gateway',
    madeAt: 'Brankas Pte Ltd',
    builtWith: brankasStack.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: (
      <LinkWeb
        name="demoprod.yokke.app"
        icon={<IconExternal />}
        url="https://demoprod.yokke.app/"
        isGitHub={false}
      />
    ),
  },
  {
    year: '2021',
    project: 'Rest API template with CI/CD ',
    madeAt: 'Brankas Pte Ltd',
    builtWith: restApiTemplateStack.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: (
      <LinkWeb
        name="GitHub"
        icon={<GithubFilled />}
        url="https://github.com/rizkyian78/template-rest-api"
        isGitHub={true}
      />
    ),
  },
  {
    year: '2020',
    project: 'Pertamina Direct Buying',
    madeAt: 'Nusantech',
    builtWith: pertaminVMI.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: (
      <LinkWeb
        name="vmi.e-logisticruiv.com"
        icon={<IconExternal />}
        url="https://vmi.e-logisticruiv.com/"
        isGitHub={false}
      />
    ),
  },
]
