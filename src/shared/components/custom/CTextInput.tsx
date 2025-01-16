import { TextInputProps, TextInput } from 'react-native'

export type CTextInputProps = TextInputProps

const CTextInput = ({ ...rest }: CTextInputProps) => {
  return <TextInput {...rest} />
}

export default CTextInput
