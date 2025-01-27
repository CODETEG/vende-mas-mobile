import { ScrollViewProps, ScrollView } from 'react-native'
import React from 'react'

export type CScrollViewProps = ScrollViewProps

const CScrollView = ({
  showsVerticalScrollIndicator = false,
  ...rest
}: CScrollViewProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...rest}
    />
  )
}

export default CScrollView
