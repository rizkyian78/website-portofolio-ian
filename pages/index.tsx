import Header from './header';
import About from './about';
import SideBarLeft from './SideBarLeft/SideBarLeft';
import SideBarRight from './SideBarRight/SideBarRight';
import { Row, Col } from 'antd';

export default function Home() {
  return (
    <>
      <Header />
      <Row justify="space-between">
        <Col offset={1}>
          <SideBarLeft />
        </Col>
        <Col span={1}>
          <SideBarRight />
        </Col>
      </Row>
    </>
  );
}
