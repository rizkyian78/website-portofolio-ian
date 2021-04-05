import { Row, Typography, Space, Image, Card, Col } from 'antd';
import style from './AboutMe.scss';

import { createFromIconfontCN } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
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
          for a variety of clients. Here are a few technologies I've been
          working with recently:
          <Space></Space>
          <Row justify="space-around">
            <Col>
              <IconFont type="icon-javascript" /> Typescript
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Sass</li>
            </Col>
            <Col>
              <li>Relational Database</li>
              <li>Non Relational Database</li>
              <IconFont type="icon-python" /> Python
              <li>Unit Testing</li>
            </Col>
          </Row>
        </Paragraph>
        <Image
          style={{ borderRadius: 20 }}
          preview={false}
          id={style.image}
          height={300}
          width={300}
          src="https://awsimages.detik.net.id/community/media/visual/2018/11/07/c24ec212-e5ec-4335-a014-768f86e4a1e9.png?w=700&q=90"
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
