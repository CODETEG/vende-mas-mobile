import { PressableProps, Pressable } from 'react-native'

export type CButtonProps = PressableProps

const CButton = ({ ...rest }: CButtonProps) => {
  return <Pressable {...rest} />
}

export default CButton
