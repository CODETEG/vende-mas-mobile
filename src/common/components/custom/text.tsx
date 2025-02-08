import { cn } from '@/common/utils/styles'
import { Text, TextProps } from 'react-native'

export type CTextProps = TextProps

const CText = ({ className, ...rest }: CTextProps) => {
  return (
    <Text
      className={cn('text-light-primary dark:text-dark-primary', className)}
      {...rest}
    />
  )
}

export default CText
