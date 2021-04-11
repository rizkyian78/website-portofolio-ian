import style from '../styles/Home.module.scss';
import '../styles/globals.scss';

import { Menu, Button, Row, Typography } from 'antd';
import Fade from 'react-reveal/Fade';

export default function Header() {
  return (
    <>
      <Row justify="space-between" align="middle">
        <img
          style={{ opacity: 0.5 }}
          height={75}
          width={75}
          draggable="false"
          alt="rizky ian indiarto"
          src="https://images.vexels.com/media/users/3/191582/isolated/preview/23b7f3d8fe83689a16dbf1ff139c7a89-deer-head-drawn-by-vexels.png"
        />
        <Menu
          mode="horizontal"
          activeKey="0"
          style={{
            backgroundColor: 'transparent',
            borderBottomColor: '#0a192f',
          }}
        >
          <Menu.Item key="1" className="a">
            <Fade top cascade delay={150 * 1}>
              <Typography className={style.main}>
                <span className={style.spanModule}>01.</span> About
              </Typography>
            </Fade>
          </Menu.Item>
          <Menu.Item key="2">
            <Fade top cascade delay={150 * 2}>
              <Typography className={style.main}>
                <span className={style.spanModule}>02.</span> Exprience
              </Typography>
            </Fade>
          </Menu.Item>
          <Menu.Item key="3">
            <Fade top cascade delay={150 * 3}>
              <Typography className={style.main}>
                <span className={style.spanModule}>03.</span> Work
              </Typography>
            </Fade>
          </Menu.Item>
          <Menu.Item key="4">
            <Fade top cascade delay={150 * 4}>
              <Typography className={style.main}>
                <span className={style.spanModule}>04.</span> Contact
              </Typography>
            </Fade>
          </Menu.Item>
          <Menu.Item key="resume">
            <Fade top cascade delay={150 * 5}>
              <Button
                type="ghost"
                style={{
                  color: '#64ffda',
                  fontSize: 13,
                  borderColor: '#64ffda',
                }}
                href="https://docs.google.com/document/d/1o3GQXNCld-RsJ9f9Uca0Cny3zzFGQZjQULE_S8OgRZ8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Fade>
          </Menu.Item>
        </Menu>
      </Row>
    </>
  );
}
