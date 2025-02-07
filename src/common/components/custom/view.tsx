import { View, ViewProps } from 'react-native'

export type CViewProps = ViewProps

const CView = ({ ...rest }: CViewProps) => {
  return <View {...rest} />
}

export default CView
