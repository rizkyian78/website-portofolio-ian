import style from '../styles/Home.module.scss';
import '../styles/globals.scss';

import { Menu, Button, Row, Typography } from 'antd';

export default function Home() {
  return (
    <>
      <Row justify="space-between" align="middle">
        <img
          style={{ opacity: 0.5 }}
          height={75}
          width={75}
          src="https://images.vexels.com/media/users/3/191582/isolated/preview/23b7f3d8fe83689a16dbf1ff139c7a89-deer-head-drawn-by-vexels.png"
        />
        <Menu
          mode="horizontal"
          style={{
            backgroundColor: 'transparent',
            borderBottomColor: '#0a192f',
          }}
        >
          <Menu.Item key="1">
            <Typography className={style.main}>01. About</Typography>
          </Menu.Item>
          <Menu.Item key="2">
            <Typography className={style.main}>02. Exprience</Typography>
          </Menu.Item>
          <Menu.Item key="3">
            <Typography className={style.main}>03. Work</Typography>
          </Menu.Item>
          <Menu.Item key="4">
            <Typography className={style.main}>04. Contact</Typography>
          </Menu.Item>
          <Menu.Item key="resume">
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
          </Menu.Item>
        </Menu>
      </Row>
    </>
  );
}
