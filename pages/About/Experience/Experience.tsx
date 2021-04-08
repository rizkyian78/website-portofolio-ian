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
      <Tabs
        tabPosition="left"
        id={style.tabText}
        animated={{ inkBar: false, tabPane: false }}
      >
        <TabPane tab="Nusantech" key="2">
          SoftWare Engineer{' '}
          <Typography.Link
            style={{ fontWeight: 'bold' }}
            href="https://nusantech.com/about-us/"
            target="_blank"
            rel="noopener noreferrer"
            id={style.linkToNusantech}
          >
            @Nusantech
          </Typography.Link>
          <Typography id={style.tanggal}>August 2020 - Present</Typography>
          <br />
          <span style={{ textAlign: 'justify' }}>
            <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
          </span>
          Collaborated in application development by utilizing Typescript,
          NodeJS and Express as a backend framework, AWS as a cloud service
          provider, and MySQL
          <li>
            <br />
            <span style={{ textAlign: 'justify' }}>
              <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
            </span>
            Conducted Mock Technical Interview, Job Interview Simulation for
            Software Engineer, across the boot camp batches and technologies
          </li>
        </TabPane>
        <TabPane tab="Glints Singapore" key="6">
          Industrial Trainer{' '}
          <Typography.Link
            style={{ fontWeight: 'bold' }}
            href="https://academy.glints.com/"
            target="_blank"
            rel="noopener noreferrer"
            id={style.linkToNusantech}
          >
            @Glints Singapore
          </Typography.Link>
          <Typography id={style.tanggal}>January 2021 - Present</Typography>
          <br />
          <span style={{ textAlign: 'justify' }}>
            <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
          </span>
          Mentored students for each batch about Technical Mock Interview
          <li>
            <br />
            <span style={{ textAlign: 'justify' }}>
              <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
            </span>
            Conducted Mock Technical Interview, Job Interview Simulation for
            Software Engineer, across the boot camp batches and technologies
          </li>
        </TabPane>
        <TabPane tab="Grand Asoka" key="1">
          Marketing Staff{' '}
          <Typography.Link
            style={{ fontWeight: 'bold' }}
            href="https://www.google.co.id/maps/place/Perumahan+Grand+Asoka/@-7.8937497,112.6010782,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7881c2792b2509:0x64d136358a5b73f0!8m2!3d-7.893755!4d112.6032723"
            target="_blank"
            rel="noopener noreferrer"
            id={style.linkToNusantech}
          >
            @Grand Asoka
          </Typography.Link>
          <Typography id={style.tanggal}>
            September 2016 - Present (Freelance)
          </Typography>
          <br />
          <span style={{ textAlign: 'justify' }}>
            <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
          </span>
          Selling House in Malang and make strategy with developer where sales
          unit always ascend
          <li>
            <br />
            <span style={{ textAlign: 'justify' }}>
              <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
            </span>
            Marketing through digital and traditional strategy
          </li>
          <br />
          <li>
            <span style={{ textAlign: 'justify' }}>
              <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
            </span>
            Click The Link Above
          </li>
        </TabPane>
        <TabPane tab="Masdera Communication" key="3">
          Logistic Staff{' '}
          <Typography.Link
            style={{ fontWeight: 'bold' }}
            href="http://masderacommunication.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            id={style.linkToNusantech}
          >
            @Masdera
          </Typography.Link>
          <Typography id={style.tanggal}>
            December 2016 - January 2017
          </Typography>
          <br />
          <span style={{ textAlign: 'justify' }}>
            <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
          </span>
          Analyze the procurement needs of goods and / or services requested by
          other workers to meet the procurement of goods and / or services
          <li>
            <br />
            <span style={{ textAlign: 'justify' }}>
              <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
            </span>
            Communicate with multi-disciplinary teams of engineers, designers
            and producers on a daily basis
          </li>
        </TabPane>
        <TabPane tab="CV Jaya Ice Cream" key="5">
          Gojek Driver{' '}
          <Typography.Link
            style={{ fontWeight: 'bold' }}
            target="_blank"
            rel="noopener noreferrer"
            id={style.linkToNusantech}
          >
            @CV Jaya Ice Cream
          </Typography.Link>
          <Typography id={style.tanggal}>Lost Track of Time</Typography>
          <br />
          <span style={{ textAlign: 'justify' }}>
            <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
          </span>
          Worked with a team of three Marketing to build a marketing Strategies
          to make sales more impactful, an ambitious company originating from
          Malang affiliated with Diamond Ice Cream
          <br />
          <br />
          <span style={{ textAlign: 'justify' }}>
            <IconFont type="icon-24gl-nextFrame" id={style.list} />{' '}
          </span>
          Interfaced with clients on a weekly basis, providing sales expertise
        </TabPane>
      </Tabs>
    </div>
  );
}
