import { cn } from '@/common/utils/styles'
import { KeyboardAvoidingViewProps, KeyboardAvoidingView } from 'react-native'

export type CKeyboardViewProps = KeyboardAvoidingViewProps

const CKeyboardView = ({ className, ...rest }: CKeyboardViewProps) => {
  return <KeyboardAvoidingView className={cn('flex-1', className)} {...rest} />
}

export default CKeyboardView
