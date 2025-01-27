import { KeyboardAvoidingViewProps, KeyboardAvoidingView } from 'react-native'
import React from 'react'

export type CKeyboardViewProps = KeyboardAvoidingViewProps

const CKeyboardView = ({ ...rest }: CKeyboardViewProps) => {
  return <KeyboardAvoidingView className='h-full' {...rest} />
}

export default CKeyboardView
