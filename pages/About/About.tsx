import style from './About.scss';
import { Typography, Row, Col, Space } from 'antd';
import ParagraphAbout from './ParagraphAbout/ParagraphAbout';
import AboutMe from './AboutMe/AboutMe';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import OtherProject from './OtherProject/OtherProject';
import GetInTouch from './GetInTouch/GetInTouch';

export default function about() {
  return (
    <>
      <Space
        direction="vertical"
        style={{ textAlign: 'left', width: 900, marginLeft: -70 }}
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
          <Experience />
          <Project />
          <OtherProject />
        </Col>
        <GetInTouch />
      </Space>
    </>
  );
}
