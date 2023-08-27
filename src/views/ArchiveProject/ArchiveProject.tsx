import { ArrowLeftOutlined } from '@ant-design/icons'
import cx from 'classnames'
import cssHeader from './ArchiveProject.module.scss'
import { Button, Typography } from 'antd'
import TableProject from './partial/Table'

function ArchiveProject() {
  return (
    <>
      <a href="/" className={cx(cssHeader.archiveAnchor)}>
        <Button
          style={{
            backgroundColor: 'transparent',
          }}
          type="text"
          size="small"
          icon={<ArrowLeftOutlined className={cx(cssHeader.buttonBack)} />}
        />
        Rizky Ian Indiarto
      </a>
      <Typography className={cx(cssHeader.allProjectTitle)}>
        All Project
      </Typography>
      <TableProject />
    </>
  )
}

export default ArchiveProject
