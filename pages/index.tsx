import Header from './header';
import About from './About/About';
import SideBarLeft from './SideBarLeft/SideBarLeft';
import SideBarRight from './SideBarRight/SideBarRight';
import { Row, Col, Layout } from 'antd';

export default function Home() {
  return (
    <>
      <Header />
      <Row justify="space-between">
        <SideBarLeft />
        <About />
        <SideBarRight />
      </Row>
    </>
  );
}
