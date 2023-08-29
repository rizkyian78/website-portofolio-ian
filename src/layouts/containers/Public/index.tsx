import React, { useEffect, useRef, useState } from 'react'
import { ReactComponentLike } from 'prop-types'
import Header from 'layouts/containers/Public/Header'
import Footer from 'layouts/containers/Public/Footer'
import { BackTop } from 'antd'
import { useMediaQuery } from 'react-responsive'

interface IProps {
  Component: ReactComponentLike
  pageProps: any
}

function PublicContainer(props: IProps) {
  const isPhone = useMediaQuery({
    query: '(max-width: 900px)',
  })
  const { Component, pageProps } = props
  const refHeader = useRef<HTMLElement>()
  const refFooter = useRef<HTMLElement>()
  const [heightHeaderFooter, setHeightHeaderFooter] = useState(0)

  useEffect(() => {
    if (refFooter.current && refHeader.current) {
      const headerHeight = refHeader.current?.clientHeight
      const footerHeight = refFooter.current?.clientHeight
      setHeightHeaderFooter(headerHeight + footerHeight)
    }
  }, [Boolean(refHeader.current), Boolean(refFooter.current)])

  return (
    <div>
      <Header refContent={refHeader} />
      <div
        style={{
          margin: `0 ${isPhone ? '2' : '6'}%`,
        }}
      >
        <Component {...pageProps} />
      </div>
      <Footer refContent={refFooter} />
    </div>
  )
}

export default PublicContainer
