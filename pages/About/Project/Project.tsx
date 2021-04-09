import { Row, Typography, Space, Image, Card, Button } from 'antd';
import IconExternal from '../../components/icons/external';

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
      <Space style={{ marginBottom: 200 }}>
        <Typography.Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=YykjpeuMNEk&list=RDdvgZkm1xWPE&index=5&ab_channel=Coldplay"
        >
          <Image
            src="website-portofolio-2.png"
            preview={false}
            id={style.image}
            height={400}
            width={600}
            style={{ borderRadius: 5 }}
          />
        </Typography.Link>
        <Space direction="vertical">
          <Typography id={style.featureProject}>Featured Project</Typography>
          <Typography.Title level={3} id={style.projectTitle}>
            First Website Portofolio
          </Typography.Title>
          <Card size="default" id={style.card}>
            <Paragraph id={style.projectDesc}>
              The First Website I Created From Scratch That take its for a long
              time. I don't know this is React FrameWork or not
            </Paragraph>
          </Card>
          <Row justify="end">
            <Typography style={{ marginRight: 30 }} id={style.projectDesc}>
              React JS
            </Typography>
            <Typography style={{ marginRight: 30 }} id={style.projectDesc}>
              TypeScript
            </Typography>
            <Typography id={style.projectDesc}>Firebase</Typography>
          </Row>
          <Row justify="end">
            <Button
              href="https://twitter.com/rizkyian1"
              type="text"
              size="small"
              id="github"
              className={style.main}
              icon={<IconExternal />}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Row>
        </Space>
      </Space>
      <Space style={{ marginBottom: 200 }}>
        <Space direction="vertical">
          <Typography id={style.featureProjectLeft}>
            Featured Project
          </Typography>
          <Typography.Title level={3} id={style.projectTitleLeft}>
            Thon House Staycation
          </Typography.Title>
          <Card size="default" id={style.cardLeft}>
            <Paragraph id={style.projectDesc}>
              a web app about villa booking just available in Malang, East Java.
              Check it out for more information about Vacation (Still In
              Progress)
            </Paragraph>
          </Card>
          <Row justify="start">
            <Typography style={{ marginRight: 30 }} id={style.projectDesc}>
              Next JS
            </Typography>
            <Typography style={{ marginRight: 30 }} id={style.projectDesc}>
              TypeScript
            </Typography>
            <Typography id={style.projectDesc} style={{ marginRight: 30 }}>
              MongoDB
            </Typography>
            <Typography id={style.projectDesc}>EC2</Typography>
          </Row>
          <Row justify="start">
            <Button
              href="https://twitter.com/rizkyian1"
              type="text"
              size="small"
              id="github"
              className={style.main}
              icon={<IconExternal />}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Row>
        </Space>
        <Typography.Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://thon-house.web.app/"
        >
          <Image
            src="thon-house.png"
            preview={false}
            id={style.image}
            height={400}
            width={600}
            style={{ borderRadius: 5 }}
          />
        </Typography.Link>
      </Space>
      <Space>
        <Typography.Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://protra.herokuapp.com/"
        >
          <Image
            src="protra.png"
            preview={false}
            id={style.image}
            height={400}
            width={600}
            style={{ borderRadius: 5 }}
          />
        </Typography.Link>
        <Space direction="vertical">
          <Typography id={style.featureProject}>Featured Project</Typography>
          <Typography.Title level={3} id={style.projectTitle}>
            Protra
          </Typography.Title>
          <Card size="default" id={style.card}>
            <Paragraph id={style.projectDesc}>
              Protra is another popular project management app offering the
              feature of project time tracking. This app gathers information on
              your team’s work in the form of activity reports. That’s a great
              way to analyze your team’s performance and work progress.
            </Paragraph>
          </Card>
          <Row justify="end">
            <Typography style={{ marginRight: 30 }} id={style.projectDesc}>
              React JS
            </Typography>
            <Typography style={{ marginRight: 30 }} id={style.projectDesc}>
              Node Js
            </Typography>
            <Typography id={style.projectDesc}>Heroku</Typography>
          </Row>
          <Row justify="end">
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
        </Space>
      </Space>
    </div>
  );
}
