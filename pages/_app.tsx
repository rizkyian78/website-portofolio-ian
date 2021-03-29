import '../styles/globals.scss';
// import 'antd/dist/antd.less';

function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps);
  return <Component {...pageProps} />;
}

export default MyApp;
