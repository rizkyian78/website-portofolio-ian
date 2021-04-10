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
        <link rel="icon" href="/deerHead.png" />
        <meta name="title" content="rizky ian indiarto" />
        <meta name="description" content="rizky ian indiarto" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://website-portofolio-ian.vercel.app/"
        />
        <meta property="og:title" content="rizky ian indiarto" />
        <meta property="og:description" content="rizky ian indiarto" />
        <meta property="og:image" content="rizkyianindiarto" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitter.com/rizkyian1" />
        <meta property="twitter:title" content="Komba kombi" />
        <meta
          property="twitter:description"
          content="Suka sama film echhi love sora aoi and bokep"
        />
        <meta
          property="twitter:image"
          content="https://twitter.com/rizkyian1/photo"
        />
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
