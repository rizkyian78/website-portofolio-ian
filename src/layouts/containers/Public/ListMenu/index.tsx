import React from 'react'
import { Col, Button, Row, Avatar, Typography, Menu, Image } from 'antd'
import Text from '@nexys/components/Typography/Text'
import Link from 'next/link'
import BaseHeader, {
  BaseHeaderProps,
} from '@nexys/components/BaseHeader/BaseHeader'
import Fade from 'react-reveal/Fade'
import cx from 'classnames'
import cssHeader from '../Header/Header.module.scss'
import Loading from '@nexys/components/Loading/Loading'

const listMenu = [
  {
    key: '1',
    element: 'aboutMe',
    title: 'About Me',
  },
  {
    key: '2',
    element: 'experience',
    title: 'Experience',
  },
  {
    key: '3',
    element: 'work',
    title: 'Work',
  },
  {
    key: '4',
    element: 'contact',
    title: 'Contact',
  },
]

function ListMenu() {
  return (
    <Menu
      mode="horizontal"
      activeKey="0"
      style={{
        backgroundColor: 'transparent',
        borderBottomColor: '#0a192f',
      }}
    >
      {listMenu.map((v, i) => {
        return (
          <Menu.Item
            key={v.key}
            style={{
              fontSize: 16,
            }}
            onClick={() => {
              const contact = document.getElementById(v.element)
              contact.focus()
              contact.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            <Fade top cascade delay={150 * Number(v.key)}>
              <Typography className={cx(cssHeader.main)}>
                <span className={cx(cssHeader.spanModule)}>0{v.key}.</span>{' '}
                {v.title}
              </Typography>
            </Fade>
          </Menu.Item>
        )
      })}
      <Menu.Item key="resume">
        <Fade top cascade delay={150 * 5}>
          <Button
            type="ghost"
            style={{
              color: '#64ffda',
              fontSize: 16,
              borderColor: '#64ffda',
            }}
            className=""
            href="/pdf/rizky-ian.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
        </Fade>
      </Menu.Item>
    </Menu>
  )
}
export default ListMenu
