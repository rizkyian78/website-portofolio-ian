import { Row, Typography, Space, Image, Card, Col } from 'antd';
import style from './AboutMe.scss';

import { createFromIconfontCN } from '@ant-design/icons';

const { Paragraph } = Typography;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_2468873_l3cvtxjro9s.js',
    '//at.alicdn.com/t/font_2468873_5ltmnkjrg5w.js',
    '//at.alicdn.com/t/font_2468829_ieg1tbqpubf.js',
    '//at.alicdn.com/t/font_2471841_jvn0t21sw0g.js',
  ],
});

export default function AboutMe() {
  return (
    <div style={{ marginTop: 200 }}>
      <Row justify="space-around">
        <Paragraph>
          <span id={style.numberText}>01. </span>
          <span id={style.aboutMe}>About Me</span>
        </Paragraph>
        <hr id={style.coba} />
      </Row>
      <Space>
        <Paragraph style={{ color: '#8892b0' }}>
          Hello! My name is Ian and I enjoy creating things that live on the
          internet. My interest in web development started back in 2018 when I
          decided to try learning about HTML & CSS turns out hacking together a
          custom reblog button taught me a lot about HTML & CSS! Fast-forward to
          today, and I've had the privilege of working at an advertising agency,
          a start-up. My main focus these days is building accessible, inclusive
          products and digital experiences at{' '}
          <a
            href="https://nusantech.com/"
            target="_blank"
            rel="noopener noreferrer"
            id={style.linkToNusantech}
          >
            Nusantech
          </a>{' '}
          I create Youtube content with my friends about teaching Japanese to
          people who want to learn Japanese without spending money by looking at
          my content. for a variety of clients. Here are a few technologies I've
          been working with recently:
          <Space></Space>
          <Row justify="space-around">
            <Col>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-typescript" /> Typescript
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-javascript" /> Javascript (ES6+)
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-python" /> Python
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-go" /> Go
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-sass" /> Sass
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-aws" /> AWS
              </li>
            </Col>
            <Col>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-reactjs-line" /> React
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-mysql" /> Mysql
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-mongodb" /> Mongodb
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-jest" /> Jest
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-flutter" /> Flutter
              </li>
              <li style={{ listStyle: 'none' }}>
                <IconFont type="icon-firebase" /> Firebase
              </li>
            </Col>
          </Row>
        </Paragraph>
        <Image
          draggable={false}
          style={{ borderRadius: 20 }}
          preview={false}
          id={style.image}
          height={300}
          width={300}
          alt="rizky ian indiarto"
          src="/profile.jpeg"
        />
        <Card
          id={style.frame}
          style={{
            backgroundColor: 'transparent',
            width: 270,
            height: 320,
          }}
        ></Card>
      </Space>
    </div>
  );
}
