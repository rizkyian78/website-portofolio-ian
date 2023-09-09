import { useMediaQuery } from 'react-responsive'
import antdMediaQuery from 'use-media-antd-query'

export const isMobile = (firstOut, secondOut) => {
  const isPhone = useMediaQuery({
    query: '(max-width: 900px)',
  })
  const colSize = antdMediaQuery()

  if (colSize !== 'md') {
    return secondOut
  }
  return firstOut
}
