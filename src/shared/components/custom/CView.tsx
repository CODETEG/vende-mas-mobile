import { View, ViewProps } from 'react-native'
import React from 'react'

export type CViewProps = ViewProps

const CView = ({ ...rest }: CViewProps) => {
  return <View {...rest} />
}

export default CView
