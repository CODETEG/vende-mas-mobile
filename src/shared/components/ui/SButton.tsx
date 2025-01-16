import CButton, { CButtonProps } from '@/custom-components/CButton'
import CText from '@/custom-components/CText'

interface SButtonProps extends CButtonProps {
  title: string
  textClassname?: string
}

const SButton = ({
  title,
  onPress,
  disabled,
  textClassname,
  ...rest
}: SButtonProps) => {
  return (
    <CButton
      {...rest}
      disabled={disabled}
      className={`bg-secondary rounded-xl min-h-[58px] justify-center active:opacity-70 items-center ${disabled ? 'opacity-50' : ''}`}
    >
      <CText className={`text-white font-psemibold text-lg ${textClassname}`}>
        {title}
      </CText>
    </CButton>
  )
}

export default SButton
