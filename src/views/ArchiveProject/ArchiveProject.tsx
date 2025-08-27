/* eslint-disable import/extensions */
import { ArrowLeftOutlined } from '@ant-design/icons'
import cx from 'classnames'
import { Button, Typography } from 'antd'
import React from 'react'
import cssHeader from './ArchiveProject.module.scss'
import TableProject from './partial/Table'

function ArchiveProject() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default ArchiveProject
