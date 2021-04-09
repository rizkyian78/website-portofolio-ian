import { Typography, Row, Card, Col, Space, Button } from 'antd';
import IconExternal from '../../components/icons/external';
import IconFolder from '../../components/icons/folder';

import style from './OtherProject.scss';

const { Title, Link } = Typography;

export default function OtherProject() {
  return (
    <div style={{ marginTop: 200, textAlign: 'center' }}>
      <Title id={style.title} level={2}>
        Other Noteworthy Projects
      </Title>
      <Link id={style.archive}>View Archive</Link>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: 30 }}>
        <Col span={8}>
          <Card id={style.cardProject} hoverable>
            <Row justify="space-between" align="middle">
              <Button
                href="https://protra.herokuapp.com/"
                type="text"
                size="large"
                id={style.folder}
                icon={<IconFolder />}
                target="_blank"
                rel="noopener noreferrer"
              />
              <Button
                href="https://protra.herokuapp.com/"
                type="text"
                size="small"
                id="github"
                className={style.main}
                icon={<IconExternal />}
                target="_blank"
                rel="noopener noreferrer"
              />
            </Row>
            <br />
            <Title level={4} style={{ textAlign: 'start' }} id={style.title}>
              Pertamina VMI
            </Title>
            <Typography
              style={{ textAlign: 'start' }}
              id={style.projectDescription}
            >
              Building A Website Pertamina RUIV Cilacap for Internal Product
              Supply{' '}
            </Typography>
            <br />
            <Typography id={style.projectTool} style={{ textAlign: 'left' }}>
              Next.js Typescript AntD
            </Typography>
          </Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
        <Col span={8}>
          <Card id={style.cardProject} hoverable>
            {' '}
            <Row justify="space-between" align="middle">
              <Button
                href="https://protra.herokuapp.com/"
                type="text"
                size="large"
                id={style.folder}
                icon={<IconFolder />}
                target="_blank"
                rel="noopener noreferrer"
              />
              <Button
                href="https://protra.herokuapp.com/"
                type="text"
                size="small"
                id="github"
                className={style.main}
                icon={<IconExternal />}
                target="_blank"
                rel="noopener noreferrer"
              />
            </Row>
            <br />
            <Title level={4} style={{ textAlign: 'start' }} id={style.title}>
              Pertamina VMI
            </Title>
            <Typography
              style={{ textAlign: 'start' }}
              id={style.projectDescription}
            >
              Building A Website Pertamina RUIV Cilacap for Internal Product
              Supply{' '}
            </Typography>
            <br />
            <Typography id={style.projectTool} style={{ textAlign: 'left' }}>
              Next.js Typescript AntD
            </Typography>
          </Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
      </Row>
    </div>
  );
}
