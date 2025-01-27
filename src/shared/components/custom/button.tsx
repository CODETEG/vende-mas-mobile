import { PressableProps, Pressable } from 'react-native'

export type CButtonProps = PressableProps

const CButton = ({ ...rest }: CButtonProps) => {
  return <Pressable className='flex items-center w-full' {...rest} />
}

export default CButton
