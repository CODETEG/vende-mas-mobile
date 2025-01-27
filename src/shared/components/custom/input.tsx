import { TextInput } from 'react-native'

interface Props extends TextInput {
  className?: string
}

const CInput = ({ ...rest }: Props) => {
  return (
    <TextInput
      {...rest}
      className={` text-white font-semibold text-base w-full h-16 px-4 bg-black-100 rounded-2xl border border-black-200 focus:border-secondary `}
      // secureTextEntry={isPassword && !showPassword}
    />
  )
}

export default CInput
