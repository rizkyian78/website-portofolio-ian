import { Row, Typography, Space, Image } from 'antd';

import style from './Project.scss';

const { Paragraph } = Typography;

export default function Project() {
  return (
    <div style={{ marginTop: 200 }}>
      <Row justify="space-around">
        <Paragraph>
          <span id={style.numberText}>03. </span>
          <span id={style.aboutMe}>Some Things I’ve Built</span>
        </Paragraph>
        <hr id={style.divider} />
      </Row>
      <Space direction="vertical">
        <Image src="website-portofolio-2.png" height={400} width={500} />
      </Space>
    </div>
  );
}
