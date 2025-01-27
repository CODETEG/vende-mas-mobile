import { Text, TextProps } from 'react-native'
import React from 'react'

export type CTextProps = TextProps

const CText = ({ ...rest }: CTextProps) => {
  return <Text {...rest} />
}

export default CText
