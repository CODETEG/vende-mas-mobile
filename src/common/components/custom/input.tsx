import { cn } from '@/common/utils/styles'
import { TextInput } from 'react-native'

interface Props extends TextInput {
  className?: string
}

const CInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      className={cn(
        'text-white font-semibold text-base w-full h-16 px-4 bg-black-100 rounded-2xl border border-black-200 focus:border-secondary',
        className,
      )}
      {...rest}
    />
  )
}

export default CInput
