import style from './ParagraphAbout.scss';
import { Typography, Button } from 'antd';

export default function ParagraphAbout() {
  return (
    <>
      <Typography id={style.paragraph}>
        I'm a Jakarta-based software engineer who specializes in building
        exceptional digital experiences. Currently, I'm an engineer at{' '}
        <a
          href="https://nusantech.com/"
          target="_blank"
          rel="noopener noreferrer"
          id={style.linkToNusantech}
        >
          Nusantech
        </a>{' '}
        focused on building accessible, human-centered products.
      </Typography>
      <Button
        type="ghost"
        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rizkyian78@gmail.com`}
        target="_blank"
        rel="noopener noreferrer"
        id={style.buttonPDF}
      >
        Get In Touch
      </Button>
    </>
  );
}
