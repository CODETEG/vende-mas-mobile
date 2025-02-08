import { cn } from '@/common/utils/styles'
import { ScrollViewProps, ScrollView } from 'react-native'

export type CScrollViewProps = ScrollViewProps

const CScrollView = ({
  showsVerticalScrollIndicator = false,
  className,
  ...rest
}: CScrollViewProps) => {
  return (
    <ScrollView
      className={cn('', className)}
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...rest}
    />
  )
}

export default CScrollView
