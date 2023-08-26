import React, { ReactNode } from 'react'
import Content, { ContentProps } from '@nexys/components/Content/Content'
import cssHeader from 'layouts/containers/Public/Header/Header.module.scss'
import { Row } from 'antd'
import cx from 'classnames'

export interface BaseHeaderProps extends ContentProps {
  children?: ReactNode
  style?: CSSStyleDeclaration | any
  absolute?: boolean
}

function BaseHeader(props: BaseHeaderProps) {
  const {
    absolute,
    children,
    className,
    style,
    styleContainer,
    ...otherProps
  } = props

  return (
    <div>
      <Row
        justify="space-between"
        align="middle"
        style={{
          height: 56,
          marginBottom: '10%',
        }}
      >
        {children}
      </Row>
    </div>
  )
}

export default BaseHeader
