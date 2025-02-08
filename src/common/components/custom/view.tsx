import { cn } from '@/common/utils/styles'
import { View, ViewProps } from 'react-native'

export type CViewProps = ViewProps

const CView = ({ className, ...rest }: CViewProps) => {
  return <View className={cn('', className)} {...rest} />
}

export default CView
