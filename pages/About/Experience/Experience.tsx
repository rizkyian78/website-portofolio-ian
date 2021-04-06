import React from 'react';
import { Row, Typography, Tabs } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

import style from './Experience.scss';

const { TabPane } = Tabs;
const { Paragraph } = Typography;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_2468873_l3cvtxjro9s.js',
    '//at.alicdn.com/t/font_2468873_5ltmnkjrg5w.js',
    '//at.alicdn.com/t/font_2468829_ieg1tbqpubf.js',
    '//at.alicdn.com/t/font_2468829_sg0e5p5wn6d.js',
    '//at.alicdn.com/t/font_2468829_wlavsl484h.js',
  ],
});

export default function Experience() {
  return (
    <div style={{ marginTop: 200, paddingLeft: 100 }}>
      <Row justify="space-around">
        <Paragraph>
          <span id={style.numberText}>02. </span>
          <span id={style.aboutMe}>Where I’ve Worked</span>
        </Paragraph>
        <hr id={style.divider} />
      </Row>
      <Tabs tabPosition="left" id={style.tabText}>
        <TabPane tab="Nusantech" key="1">
          Marketing Staff{' '}
          <Typography.Link
            style={{ fontWeight: 'bold' }}
            href="https://www.google.co.id/maps/place/Perumahan+Grand+Asoka/@-7.8937497,112.6010782,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7881c2792b2509:0x64d136358a5b73f0!8m2!3d-7.893755!4d112.6032723"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Grand Asoka
          </Typography.Link>
          <Typography id={style.tanggal}>August 2020 - Present</Typography>
          <br />
          <span style={{ textAlign: 'justify' }}>
            <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
          </span>
          Selling House in Malang and make strategy with developer where sales
          unit always ascend
          <li>
            <span style={{ textAlign: 'justify' }}>
              <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
            </span>
            Marketing through digital and traditional strategy
          </li>
        </TabPane>
        <TabPane tab="Grand Asoka" key="2">
          <Typography>Nusantech</Typography>
        </TabPane>
        <TabPane tab="Masdera Communication" key="3">
          <Typography>Nusantech</Typography>
        </TabPane>
        <TabPane tab="Gojek Driver" key="4">
          <Typography>Nusantech</Typography>
        </TabPane>
      </Tabs>
    </div>
  );
}
