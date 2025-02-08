import { cn } from '@/common/utils/styles'
import { TextInputProps, TextInput } from 'react-native'

export type CTextInputProps = TextInputProps

const CTextInput = ({ className, ...rest }: CTextInputProps) => {
  return <TextInput className={cn('', className)} {...rest} />
}

export default CTextInput
