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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Rizky Ian Indiarto"
          key="Rizky Ian Indiarto"
        />
        <meta name="description" content="Rizky Ian Indiarto" />
        <title>Rizky Ian Indiarto || Political Graduate</title>
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
