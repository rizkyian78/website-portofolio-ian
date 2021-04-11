import style from './SideBarRight.scss';
import { Affix, Button } from 'antd';
import Fade from 'react-reveal/Fade';

export default function SideBarLeft() {
  return (
    <Affix offsetTop={400}>
      <Fade bottom cascade delay={150 * 1}>
        <Button
          id={style.mata}
          type="text"
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rizkyian78@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
        >
          rizkyian78@gmail.com
        </Button>
      </Fade>
    </Affix>
  );
}
