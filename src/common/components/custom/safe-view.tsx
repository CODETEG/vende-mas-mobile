import { cn } from '@/common/utils/styles'
import { SafeAreaView } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

export type CSafeViewProps = SafeAreaViewProps

const CSafeView = ({ className, ...rest }: CSafeViewProps) => {
  return <SafeAreaView className={cn('m-safe', className)} {...rest} />
}

export default CSafeView
