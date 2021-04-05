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
        href="https://docs.google.com/document/d/1o3GQXNCld-RsJ9f9Uca0Cny3zzFGQZjQULE_S8OgRZ8/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        id={style.buttonPDF}
      >
        Get In Touch
      </Button>
    </>
  );
}
