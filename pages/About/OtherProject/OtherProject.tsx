import { Typography, Row, Card, Col, Space, Button } from 'antd';
import IconExternal from '../../components/icons/external';
import IconFolder from '../../components/icons/folder';
import Fade from 'react-reveal/Fade';

import style from './OtherProject.scss';

const { Title, Link } = Typography;

export default function OtherProject() {
  return (
    <>
      <div style={{ marginTop: 200, textAlign: 'center' }}>
        <Fade bottom cascade>
          <Title id={style.title} level={2}>
            Other Noteworthy Projects
          </Title>
          <Link href="https://rizky-ian.vercel.app/" id={style.archive}>
            View Archive
          </Link>
        </Fade>
        <Row
          gutter={[16, 16]}
          justify="center"
          style={{ marginTop: 30, width: '120%', marginLeft: -50 }}
        >
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
                  href="https://vmi.e-logisticruiv.com/"
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
              <Typography id={style.projectTool} style={{ textAlign: 'left' }}>
                Next.js Typescript AntD
              </Typography>
            </Card>
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
                Pertamina Fabrikasi
              </Title>
              <Typography
                style={{ textAlign: 'start' }}
                id={style.projectDescription}
              >
                Building A Website Pertamina RUIV Cilacap for Trading Product
                With Vendor
              </Typography>
              <Typography id={style.projectTool} style={{ textAlign: 'left' }}>
                Next.js Typescript AntD
              </Typography>
            </Card>
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
                Burger Builder
              </Title>
              <Typography
                style={{ textAlign: 'start' }}
                id={style.projectDescription}
              >
                A first App Of my Website Developer Project using React.js and
                Hosting Using Firebase Host. I Make it due to my Interest of
                Internet and Computer
              </Typography>
              <Typography id={style.projectTool} style={{ textAlign: 'left' }}>
                React.js Firebase
              </Typography>
            </Card>
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
                Sistem Hotel Management
              </Title>
              <Typography
                style={{ textAlign: 'start' }}
                id={style.projectDescription}
              >
                A Website for Internal System Management Hotel
              </Typography>
              <Typography id={style.projectTool} style={{ textAlign: 'left' }}>
                Next.js Typescript AntD
              </Typography>
            </Card>
          </Col>
        </Row>
      </div>
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
          style={{ width: 'auto' }}
          id={style.buttonPDF}
        >
          Project Still In Progress
        </Button>
      </div>
    </>
  );
}
