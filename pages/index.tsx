import Header from './header';
import About from './About/About';
import SideBarLeft from './SideBarLeft/SideBarLeft';
import SideBarRight from './SideBarRight/SideBarRight';
import Head from 'next/head';
import { Row } from 'antd';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rizky Ian Indiarto || Political Graduate</title>
        <meta name="description" content="Rizky Ian Indiarto" />
        <link rel="icon" href="/deerHead.png" />
      </Head>
      <Header />
      <Row justify="space-between" style={{ maxWidth: '100%' }}>
        <SideBarLeft />
        <About />
        <SideBarRight />
      </Row>
    </>
  );
}
