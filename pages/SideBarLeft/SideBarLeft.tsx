import style from './SideBarLeft.scss';
import IconTwitter from '../components/icons/twitter';
import IconInstagram from '../components/icons/instagram';
import IconLinkedin from '../components/icons/linkedin';
import IconGithub from '../components/icons/github';
import { Button, Space, Affix } from 'antd';
import React from 'react';
import anime, { AnimeInstance } from 'animejs';
// import 'antd/dist/antd.css';

export default function SideBarLeft() {
  const twitterRef = React.useRef<AnimeInstance>(null);
  const handleClick = (data) => {
    setTimeout(() => {
      anime({
        targets: `#${data}`,
        opacity: [0, 5],
        translateX: [250, 0],
        duration: 400,
        easing: 'easeOutSine',
      });
    }, 100);
  };
  return (
    <>
      <Affix offsetTop={400}>
        <Space className={[style.main].join(' ')} direction="vertical">
          <Button
            href="https://twitter.com/rizkyian1"
            type="text"
            size="middle"
            id="twitter"
            icon={<IconTwitter />}
            className={[style.main].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleClick('twitter')}
          />
          <Button
            href="https://www.instagram.com/rizkyian5719"
            type="text"
            id="instagram"
            size="middle"
            icon={<IconInstagram />}
            className={[style.main].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: 10 }}
            onMouseEnter={(e) => handleClick('instagram')}
          />
          <Button
            href="https://twitter.com/rizkyian1"
            type="text"
            size="middle"
            id="linkedin"
            icon={<IconLinkedin />}
            className={[style.main].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleClick('linkedin')}
          />
          <Button
            href="https://twitter.com/rizkyian1"
            type="text"
            size="middle"
            id="github"
            icon={<IconGithub />}
            className={[style.main].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleClick('github')}
          />
        </Space>
        <div className={style.divider}></div>
      </Affix>
    </>
  );
}
