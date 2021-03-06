import Header from './header';
import About from './About/About';
import SideBarLeft from './SideBarLeft/SideBarLeft';
import SideBarRight from './SideBarRight/SideBarRight';
import Head from 'next/head';
import { Row } from 'antd';
import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/iconLoding.json';

import Fade from 'react-reveal/Fade';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Rizky Ian Indiarto</title>
        <link rel="icon" href="/deerHead.png" />
        <meta name="title" content="Rizky Ian Indiarto" />
        <meta name="description" content="Rizky Ian is a software engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rizky-ian.vercel.app/" />
        <meta property="og:title" content="rizky ian indiarto" />
        <meta property="og:description" content="rizky ian indiarto" />
        <meta
          property="og:image"
          content="https://rizky-ian.vercel.app/profile.jpeg"
        />
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
      {isLoading ? (
        <div style={{ maxHeight: 30, minHeight: 30 }}>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={false}
            isPaused={false}
          />
        </div>
      ) : (
        <>
          <Header />
          <Row justify="space-between" style={{ maxWidth: '100%' }}>
            <SideBarLeft />
            <Fade delay={150 * 5}>
              <About />
            </Fade>
            <SideBarRight />
          </Row>
        </>
      )}
    </>
  );
}
