import { ScrollViewProps, ScrollView } from 'react-native'

export type CScrollViewProps = ScrollViewProps

const CScrollView = ({
  showsVerticalScrollIndicator = false,
  ...rest
}: CScrollViewProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      {...rest}
    />
  )
}

export default CScrollView
