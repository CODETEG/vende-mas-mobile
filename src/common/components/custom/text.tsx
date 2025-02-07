import { Text, TextProps } from 'react-native'

export type CTextProps = TextProps

const CText = ({ ...rest }: CTextProps) => {
  return <Text {...rest} />
}

export default CText
