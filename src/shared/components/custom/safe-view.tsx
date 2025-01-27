import { SafeAreaView } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

export type CSafeViewProps = SafeAreaViewProps

const CSafeView = ({ ...rest }: CSafeViewProps) => {
  return <SafeAreaView className='m-safe' {...rest} />
}

export default CSafeView
