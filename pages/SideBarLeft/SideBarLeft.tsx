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
  const handleClick = (data) => {
    setTimeout(() => {
      anime({
        targets: `#${data}`,
        rotate: 360,
        duration: 3,
      });
    }, 100);
  };
  return (
    <>
      <Affix offsetTop={400} style={{ width: 10 }}>
        <Space className={[style.main].join(' ')} direction="vertical">
          <Button
            href="https://twitter.com/rizkyian1"
            type="text"
            size="small"
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
            size="small"
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
            size="small"
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
            size="small"
            id="github"
            icon={<IconGithub />}
            className={[style.main].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleClick('github')}
          />
          <Button
            href="https://twitter.com/rizkyian1"
            type="text"
            size="small"
            id="github"
            icon={<IconGithub />}
            className={[style.main].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleClick('github')}
          />
        </Space>
      </Affix>
    </>
  );
}
