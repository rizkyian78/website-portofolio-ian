import style from './About.scss';
import { Typography, Row, Col, Space } from 'antd';
import ParagraphAbout from './ParagraphAbout/ParagraphAbout';

export default function about() {
  return (
    <>
      <Space direction="vertical" style={{ textAlign: 'left', width: 800 }}>
        <Typography id={style.normalText}>Hi, my name is</Typography>
        <Col>
          <Typography.Title id={style.nameTransparent}>
            Rizky Ian Indiarto
          </Typography.Title>
          <Typography.Title level={1} id={style.contextUnder}>
            I build things for the web.
          </Typography.Title>
          <ParagraphAbout />
        </Col>
      </Space>
    </>
  );
}
