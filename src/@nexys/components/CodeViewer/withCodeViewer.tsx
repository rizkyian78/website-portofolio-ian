import React from 'react'
import Content from '@nexys/components/Content/Content'
import dynamic from 'next/dynamic'

const CodeViewer = dynamic(() =>
  import('@nexys/components/CodeViewer/CodeViewer'),
)

function withCodeViewer(keyProp, Component) {
  return function WithCodeViewer(props: any) {
    const { pageProps } = props
    return (
      <>
        <Content style={{ paddingBottom: 10 }}>
          <Component {...props} />
        </Content>
        <Content>
          <CodeViewer text={pageProps[keyProp]} />
        </Content>
      </>
    )
  }
}

export default withCodeViewer
