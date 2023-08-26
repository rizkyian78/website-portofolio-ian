import React from 'react'
import { Col, Image } from 'antd'
import Link from 'next/link'
import BaseHeader, {
  BaseHeaderProps,
} from '@nexys/components/BaseHeader/BaseHeader'

import ListMenu from '../ListMenu'

function Header(props: BaseHeaderProps) {
  return <BaseHeader {...props}></BaseHeader>
}

export default Header
