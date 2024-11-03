import cx from 'classnames'
import cssHeader from './Table.module.scss'
import { Button, Row, Typography, Col } from 'antd'
import {
  brankasStack,
  decisionEngineStack,
  nusaLmsStack,
  pertaminDirectBuying,
  pertaminaVMI,
  rcmsStack,
  restApiTemplateStack,
  telkomNeucentrixStack,
  twitterCloneStack,
} from './dataSourceProject'
import ButtonLanguage from 'views/ButtonLanguage/ButtonLanguage'
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
    year: '2024',
    project: 'Decision Engine',
    madeAt: 'Bank Neo Commerce',
    builtWith: decisionEngineStack.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: <></>,
  },
  {
    year: '2024',
    project: 'Risk Control Management System',
    madeAt: 'Bank Neo Commerce',
    builtWith: rcmsStack.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: <></>,
  },
  {
    year: '2021',
    project: 'Internet Payment Gateway',
    madeAt: 'Brankas Pte Ltd',
    builtWith: brankasStack.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: (
      <LinkWeb
        name="demoprod.yokke.app"
        icon={<IconExternal />}
        url="https://mtiipg:brankasipg@demoshop.yokke.app/"
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
    year: '2021',
    project: 'Weather App Desktop',
    madeAt: 'Brankas Pte Ltd',
    builtWith: twitterCloneStack.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: <></>,
  },
  {
    year: '2020',
    project: 'Pertamina Direct Buying',
    madeAt: 'Nusantech',
    builtWith: pertaminDirectBuying.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: (
      <LinkWeb
        name="directbuying.e-logisticruiv.com"
        icon={<IconExternal />}
        url="https://directbuying.e-logisticruiv.com/"
        isGitHub={false}
      />
    ),
  },
  {
    year: '2020',
    project: 'Pertamina VMI',
    madeAt: 'Nusantech',
    builtWith: pertaminaVMI.map((v) => {
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
  {
    year: '2021',
    project: 'Telkom Neucentrix',
    madeAt: 'Nusantech',
    builtWith: telkomNeucentrixStack.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: <></>,
  },
  {
    year: '2021',
    project: 'Nusa LMS',
    madeAt: 'Nusantech',
    builtWith: nusaLmsStack.map((v) => {
      return <ButtonLanguage name={v.name} />
    }),
    link: (
      <LinkWeb
        name="app.nusalms.com"
        icon={<IconExternal />}
        url="https://app.nusalms.com/login/"
        isGitHub={false}
      />
    ),
  },
]
