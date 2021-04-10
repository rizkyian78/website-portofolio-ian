import { Typography, Space, Button } from 'antd';
import style from './GetInTouch.scss';

const { Title, Paragraph } = Typography;

export default function GetInTouch() {
  return (
    <div style={{ marginTop: 200, textAlign: 'center', paddingBottom: 200 }}>
      <Space direction="vertical">
        <Typography id={style.whatNext}>04. Whats Next</Typography>
        <Title id={style.title}>Get In Touch</Title>
        <Typography id={style.paragraphTouch}>
          I'm currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            type="ghost"
            href="https://docs.google.com/document/d/1o3GQXNCld-RsJ9f9Uca0Cny3zzFGQZjQULE_S8OgRZ8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            id={style.buttonPDF}
          >
            Say Hello
          </Button>
        </div>
      </Space>
    </div>
  );
}
