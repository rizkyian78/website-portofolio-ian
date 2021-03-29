import style from './SideBarRight.scss';
import { Affix } from 'antd';

export default function SideBarLeft() {
  return (
    <Affix offsetTop={400}>
      <a
        className={style.main}
        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rizkyian78@gmail.com`}
        target="_blank"
        rel="noopener noreferrer"
      >
        rizkyian78@gmail.com
      </a>
    </Affix>
  );
}
