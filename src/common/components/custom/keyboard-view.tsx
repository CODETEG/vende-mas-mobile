import { KeyboardAvoidingViewProps, KeyboardAvoidingView } from 'react-native'

export type CKeyboardViewProps = KeyboardAvoidingViewProps

const CKeyboardView = ({ ...rest }: CKeyboardViewProps) => {
  return <KeyboardAvoidingView className='h-full' {...rest} />
}

export default CKeyboardView
