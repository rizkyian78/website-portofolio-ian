import React, { useRef } from 'react'
// import style from './About.scss';
import { Affix, Col, Space, Typography, Row, Button } from 'antd'

import cx from 'classnames'
import cssHeader from './About.module.scss'

import CardExperience from 'views/CardExperience/CardExperience'
import { data } from './constant'

import { ArrowRightOutlined } from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'services/resizeColumn'

export default function Home(): React.JSX.Element {
  const isPhone = useMediaQuery({
    query: '(max-width: 900px)',
  })
  return (
    <>
      <Row>
        <Col
          xs={{ span: 24 }} // Extra small screens (less than 576px)
          sm={{ span: 12 }} // Small screens (576px and up)
          md={{ span: 8 }} // Medium screens (768px and up)
          className={cx(cssHeader.colMargin)}
        >
          <Col className={cx(cssHeader.affixtion)}>
            <Col
              style={{
                marginBottom: 50,
              }}
            >
              <Typography.Title className={cx(cssHeader.name)} level={1}>
                Rizky Ian Indiarto
              </Typography.Title>
              <Typography className={cx(cssHeader.role)}>
                Software Engineer at Brankas Pte Ltd
              </Typography>
              <Typography className={cx(cssHeader.description)}>
                I build accessible, inclusive products and digital experiences
                for the web.
              </Typography>
            </Col>
            <Col>
              <Space direction="horizontal">{data.map((v) => v.icon)}</Space>
            </Col>
          </Col>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }} // Extra small screens (less than 576px)
          sm={{ span: 12, offset: 0 }} // Small screens (576px and up)
          md={{ span: 8, offset: 5 }}
          offset={isPhone ? 0 : 5}
          className={cx(cssHeader.aboutMeCol)}
        >
          <Typography className={cx(cssHeader.aboutMe)}>
            I am a Software Engineer, and Digital Nomad who has freelanced and
            worked full-time at startups to grow their platform businesses. As a
            Software ,I am working on several project, for instance Pertamina
            Direct Buying, Pertamina VMI, System Management Hotel, and lastly
            working on Payment Gateway.
            <br />
            While working remotely, I have created project that i most proud of
            Integrate with payment Allobank when opening of allobank festival
            who invited RED VELVET and NCT Dream and mostly indonesian fans is
            consider high. and able to complete it flawlessly.
            <br />
            Lastly, I am multilingual (English, Japanese, Indonesian, France)
            and able to collaborate with diverse teams to create global
            products.
            <br />
            <br />
            When I’m not at the computer, I’m usually Hiking, hanging out with
            my cat, or running around West Elizabeth searching a cure for{' '}
            <a
              href="https://duckduckgo.com/?q=arthur+morgan&iax=images&ia=images"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                color: 'white',
              }}
            >
              Arthur Morgan
            </a>{' '}
            .
          </Typography>
        </Col>
        <Col
          xs={{ span: 24, offset: 0 }} // Extra small screens (less than 576px)
          sm={{ span: 12, offset: 0 }} // Small screens (576px and up)
          md={{ span: 9, offset: 13 }}
          // offset={isPhone ? 0 : 13}
        >
          <CardExperience />
          <Col>
            <a
              className={cx(cssHeader.anchor)}
              href="/pdf/rizky-ian.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className={cx(cssHeader.description)}
                style={{
                  marginTop: -4,
                  marginRight: 30,
                }}
              >
                View Full Résumé
              </span>
              <ArrowRightOutlined className={cx(cssHeader.iconArrow)} />
            </a>
          </Col>
          <a className={cx(cssHeader.anchor)} href="/archives">
            <span
              className={cx(cssHeader.description)}
              style={{
                marginTop: -4,
                marginRight: 30,
              }}
            >
              View Full Project Archive
            </span>
            <ArrowRightOutlined
              style={{
                marginBottom: 300,
              }}
              className={cx(cssHeader.iconArrow)}
            />
          </a>
        </Col>
      </Row>
    </>
  )
}
