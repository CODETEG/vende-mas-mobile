import { cn } from '@/common/utils/styles'
import { PressableProps, Pressable } from 'react-native'

export type CButtonProps = PressableProps

const CButton = ({ className, ...rest }: CButtonProps) => {
  return (
    <Pressable
      className={cn(
        'flex items-center w-full active:opacity-80 disabled:opacity-50 bg-light-secondary dark:bg-dark-secondary',
        className,
      )}
      {...rest}
    />
  )
}

export default CButton
