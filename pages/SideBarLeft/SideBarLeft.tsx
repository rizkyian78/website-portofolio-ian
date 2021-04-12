import style from './SideBarLeft.scss';
import IconTwitter from '../components/icons/twitter';
import IconInstagram from '../components/icons/instagram';
import IconLinkedin from '../components/icons/linkedin';
import IconGithub from '../components/icons/github';
import { Button, Space, Affix } from 'antd';
import React from 'react';
import Fade from 'react-reveal/Fade';
// import 'antd/dist/antd.css';

export default function SideBarLeft() {
  return (
    <>
      <Affix offsetTop={400} style={{ marginLeft: 30 }}>
        <Space direction="vertical">
          <Fade bottom cascade delay={150 * 1}>
            <Button
              href="https://twitter.com/rizkyian1"
              type="text"
              size="small"
              id={style.main}
              icon={<IconTwitter />}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Fade>
          <br />
          <Fade bottom cascade delay={150 * 2}>
            <Button
              href="https://www.instagram.com/rizkyian5719"
              type="text"
              id={style.main}
              size="small"
              icon={<IconInstagram />}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginBottom: 10 }}
            />
          </Fade>
          <br />
          <Fade bottom cascade delay={150 * 3}>
            <Button
              href="https://www.linkedin.com/in/rizky-ian-indiarto-123rzky/"
              type="text"
              size="small"
              id={style.main}
              icon={<IconLinkedin />}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Fade>
          <br />
          <Fade bottom cascade delay={150 * 3}>
            <Button
              href="https://github.com/rizkyian78"
              type="text"
              size="small"
              id={style.main}
              icon={<IconGithub />}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Fade>
        </Space>
      </Affix>
    </>
  );
}
