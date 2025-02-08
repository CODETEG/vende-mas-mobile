import CButton, { CButtonProps } from '@/common/components/custom/button'
import CText from '@/common/components/custom/text'
import { cn } from '@/common/utils/styles'

interface SButtonProps extends CButtonProps {
  title: string
  textClassname?: string
}

const SButton = ({
  title,
  onPress,
  disabled,
  className,
  textClassname,
  ...rest
}: SButtonProps) => {
  return (
    <CButton
      disabled={disabled}
      className={cn('rounded-xl', className)}
      onPress={onPress}
      {...rest}
    >
      <CText
        className={cn(
          'text-light-support dark:text-light-support font-semibold text-lg',
          textClassname,
        )}
      >
        {title}
      </CText>
    </CButton>
  )
}

export default SButton
