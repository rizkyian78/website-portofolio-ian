import React from 'react'
// import style from './About.scss';
import { Col, Space, Typography, Row, Card, Button } from 'antd'

import cx from 'classnames'
import { LinkOutlined } from '@ant-design/icons'
import IconExternal from '@nexys/components/Icon/external'
import {
  brankasStack,
  glintsStack,
  nusantechFullTimeStack,
  nusantechPartTimeStack,
} from 'views/ButtonLanguage/constant'
import ButtonLanguage from 'views/ButtonLanguage/ButtonLanguage'
import { useMediaQuery } from 'react-responsive'
import { bncStack } from 'views/ArchiveProject/partial/dataSourceProject'
import cssHeader from './CardExperience.module.scss'

export interface IButtonLanguage {
  name: string
}

function CardExperience() {
  const isPhone = useMediaQuery({
    query: '(max-width: 900px)',
  })
  return (
    <React.Fragment>
      <Card
        hoverable={false}
        className={cx(cssHeader.cardHover)}
        style={{
          marginBottom: 30,
        }}
      >
        <Row
          justify="start"
          align="top"
          className={cx(cssHeader.rowWidth)}
          style={{
            backgroundColor: 'transparent',
          }}
        >
          <Col className={cx(cssHeader.asDate)}>2024 July - 2025 August</Col>
          <Col
            span={14}
            style={{
              background: 'transparent',
            }}
          >
            <a
              href="https://www.bankneocommerce.co.id/id/home"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(cssHeader.asRole)}
            >
              Software Engineer · Bank Neo Commerce
              <Button
                style={{
                  backgroundColor: 'transparent',
                }}
                type="text"
                size="small"
                icon={<IconExternal className={cx(cssHeader.asButton)} />}
              />
            </a>
            <br />
            <Typography
              className={cx(cssHeader.description)}
              style={{
                background: 'transparent',
                textAlign: 'justify',
                marginBottom: 25,
              }}
            >
              I am part of the Risk Tribe at Bank Neo Commerce, where our
              primary objective is to ensure the security and integrity of all
              user activities and transactions. Our work includes implementing
              advanced security measures, such as face recognition technology,
              to accurately validate and authenticate users. This approach helps
              us mitigate risks and enhance the reliability of our banking
              services, maintaining trust and safety across all interactions.
            </Typography>

            <Row
              justify="start"
              align="stretch"
              style={{
                backgroundColor: 'transparent',
              }}
            >
              {bncStack.map((v) => (
                <ButtonLanguage name={v.name} />
              ))}
            </Row>
          </Col>
        </Row>
      </Card>
      <Card
        hoverable={false}
        className={cx(cssHeader.cardHover)}
        style={{
          marginBottom: 30,
        }}
      >
        <Row
          justify="start"
          align="top"
          className={cx(cssHeader.rowWidth)}
          style={{
            backgroundColor: 'transparent',
          }}
        >
          <Col className={cx(cssHeader.asDate)}>2021 Sept - July 2024</Col>
          <Col
            span={14}
            style={{
              background: 'transparent',
            }}
          >
            <a
              href="https://www.brankas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cx(cssHeader.asRole)}
            >
              Software Engineer · Brankas
              <Button
                style={{
                  backgroundColor: 'transparent',
                }}
                type="text"
                size="small"
                icon={<IconExternal className={cx(cssHeader.asButton)} />}
              />
            </a>
            <br />
            <Typography
              className={cx(cssHeader.description)}
              style={{
                background: 'transparent',
                textAlign: 'justify',
                marginBottom: 25,
              }}
            >
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Bank Mandiri and Bank Mega and
              more. Provide leadership within engineering department through
              close collaboration, knowledge shares, and mentorship.
            </Typography>
            <Space
              direction="horizontal"
              style={{
                backgroundColor: 'transparent',
                marginBottom: 20,
              }}
            >
              <a
                href="https://demoprod.yokke.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                <LinkOutlined
                  className={cx(cssHeader.icon)}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                <span
                  className={cx(cssHeader.text)}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  Yokke
                </span>
              </a>

              <a
                href="https://demoshop.megapay.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                <LinkOutlined
                  className={cx(cssHeader.icon)}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                <span
                  className={cx(cssHeader.text)}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  Bank Mega
                </span>
              </a>
            </Space>
            <Row
              justify="start"
              align="stretch"
              style={{
                backgroundColor: 'transparent',
              }}
            >
              {brankasStack.map((v) => (
                <ButtonLanguage name={v.name} />
              ))}
            </Row>
          </Col>
        </Row>
      </Card>
      <Card
        hoverable={!isPhone}
        className={cx(cssHeader.cardHover)}
        style={{
          marginBottom: 30,
        }}
        onClick={() => {
          window.open('https://ndp.nusantech.com/program')
        }}
      >
        <Row
          justify="start"
          align="top"
          className={cx(cssHeader.rowWidth)}
          style={{
            backgroundColor: 'transparent',
          }}
        >
          <Col className={cx(cssHeader.asDate)}>2021 Sept - 2022 Nov</Col>
          <Col
            span={14}
            style={{
              background: 'transparent',
            }}
          >
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={cx(cssHeader.asRole)}
              style={{
                backgroundColor: 'transparent',
              }}
            >
              Software Engineer (Part Time) · Nusantech
              <Button
                style={{
                  backgroundColor: 'transparent',
                }}
                type="text"
                size="small"
                icon={<IconExternal className={cx(cssHeader.asButton)} />}
              />
            </a>
            <br />
            <Typography
              className={cx(cssHeader.description)}
              style={{
                background: 'transparent',
                textAlign: 'justify',
                marginBottom: 25,
              }}
            >
              Act as Full Stack Engineer as well mentor in Nusa Development
              Program.
            </Typography>
            <Row
              justify="start"
              align="stretch"
              style={{
                backgroundColor: 'transparent',
              }}
            >
              {nusantechPartTimeStack.map((v) => (
                <ButtonLanguage name={v.name} />
              ))}
            </Row>
          </Col>
        </Row>
      </Card>
      <Card
        hoverable={!isPhone}
        className={cx(cssHeader.cardHover)}
        onClick={() => {
          window.open('https://nusantech.com/')
        }}
        style={{
          marginBottom: 30,
        }}
      >
        <Row
          justify="start"
          align="top"
          className={cx(cssHeader.rowWidth)}
          style={{
            backgroundColor: 'transparent',
          }}
        >
          <Col className={cx(cssHeader.asDate)}>2020 Jul - 2022 Sept</Col>
          <Col
            span={14}
            style={{
              background: 'transparent',
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={cx(cssHeader.asRole)}
            >
              Software Engineer (Full Time) · Nusantech
              <Button
                style={{
                  backgroundColor: 'transparent',
                }}
                type="text"
                size="small"
                icon={<IconExternal className={cx(cssHeader.asButton)} />}
              />
            </a>
            <br />
            <Typography
              className={cx(cssHeader.description)}
              style={{
                background: 'transparent',
                textAlign: 'justify',
                marginBottom: 25,
              }}
            >
              Act as Full Stack Engineer as well mentor in Nusa Development
              Program.
            </Typography>
            <Space
              direction="horizontal"
              style={{
                backgroundColor: 'transparent',
                marginBottom: 20,
              }}
            >
              <a
                href="https://vmi.e-logisticruiv.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                <LinkOutlined
                  className={cx(cssHeader.icon)}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                <span
                  className={cx(cssHeader.text)}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  Pertamina VMI
                </span>
              </a>

              <a
                href="https://directbuying.e-logisticruiv.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                <LinkOutlined
                  className={cx(cssHeader.icon)}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                />
                <span
                  className={cx(cssHeader.text)}
                  style={{
                    backgroundColor: 'transparent',
                  }}
                >
                  Pertamina Direct Buying
                </span>
              </a>
            </Space>
            <Row
              justify="start"
              align="stretch"
              style={{
                backgroundColor: 'transparent',
              }}
            >
              {nusantechFullTimeStack.map((v) => (
                <ButtonLanguage name={v.name} />
              ))}
            </Row>
          </Col>
        </Row>
      </Card>
      <Card
        hoverable={!isPhone}
        className={cx(cssHeader.cardHover)}
        style={{
          marginBottom: 30,
        }}
        onClick={() => {
          window.open('https://ndp.nusantech.com/program')
        }}
      >
        <Row
          justify="start"
          align="top"
          className={cx(cssHeader.rowWidth)}
          style={{
            backgroundColor: 'transparent',
          }}
        >
          <Col className={cx(cssHeader.asDate)}>2021 Jan - 2022 Jul</Col>
          <Col
            span={14}
            style={{
              background: 'transparent',
            }}
          >
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={cx(cssHeader.asRole)}
            >
              Industrial Trainer · Glints Singapore
              <Button
                style={{
                  backgroundColor: 'transparent',
                }}
                type="text"
                size="small"
                icon={<IconExternal className={cx(cssHeader.asButton)} />}
              />
            </a>
            <br />
            <Typography
              className={cx(cssHeader.description)}
              style={{
                background: 'transparent',
                textAlign: 'justify',
                marginBottom: 25,
              }}
            >
              Conduct a Basic Javascript assesment for Final Period Glints
              Academy Student and giving them some advice .
            </Typography>
            <Row
              justify="start"
              align="stretch"
              style={{
                backgroundColor: 'transparent',
              }}
            >
              {glintsStack.map((v) => (
                <ButtonLanguage name={v.name} />
              ))}
            </Row>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  )
}

export default CardExperience
