import { ScrollViewProps, ScrollView } from 'react-native'
import React from 'react'

export type CScrollViewProps = ScrollViewProps

const CScrollView = ({ ...rest }: CScrollViewProps) => {
  return <ScrollView {...rest} />
}

export default CScrollView
