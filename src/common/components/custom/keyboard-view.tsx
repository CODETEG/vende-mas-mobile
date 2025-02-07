import { KeyboardAvoidingViewProps, KeyboardAvoidingView } from 'react-native'

export type CKeyboardViewProps = KeyboardAvoidingViewProps

const CKeyboardView = ({ ...rest }: CKeyboardViewProps) => {
  return <KeyboardAvoidingView className='flex-1' {...rest} />
}

export default CKeyboardView
