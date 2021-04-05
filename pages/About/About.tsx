import style from './About.scss';
import { Typography, Row, Col, Space } from 'antd';
import ParagraphAbout from './ParagraphAbout/ParagraphAbout';
import AboutMe from './AboutMe/AboutMe';

export default function about() {
  return (
    <>
      <Space
        direction="vertical"
        style={{ textAlign: 'left', width: 900, marginTop: 0 }}
      >
        <Typography id={style.normalText}>Hi, my name is</Typography>
        <Col>
          <Typography.Title id={style.nameTransparent}>
            Rizky Ian Indiarto
          </Typography.Title>
          <Typography.Title id={style.contextUnder}>
            Build Thing For Web
          </Typography.Title>
          <ParagraphAbout />
          <AboutMe />
        </Col>
      </Space>
    </>
  );
}
