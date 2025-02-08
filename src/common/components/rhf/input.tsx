import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Ionicons } from '@expo/vector-icons'

import { TextInputProps, Pressable } from 'react-native'
import CView from '@/custom-components/view'
import CText from '@/custom-components/text'
import { cn } from '@/common/utils/styles'
import CTextInput from '@/custom-components/text-input'
import { useThemeColor } from '@/common/hooks/use-theme-color'

interface Props extends TextInputProps {
  name: string
  label: string
  className?: string
  isPassword?: boolean
}

const RHFInput = ({ name, label, className, isPassword, ...rest }: Props) => {
  const iconColor = useThemeColor({}, 'primary')

  const [showPassword, setShowPassword] = useState(false)

  const {
    control,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message

  return (
    <CView className={cn('gap-2 w-full', className)}>
      <CText className='text-sm font-medium'>{label}</CText>

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => (
          <CView className='relative flex-row'>
            <CTextInput
              className={cn(
                'bg-light-support dark:bg-dark-support w-full min-h-16 h-auto px-4 rounded-xl border border-light-primary/20 dark:border-dark-primary/30 focus:border-light-primary/50 dark:focus:border-dark-primary/60 placeholder:text-light-primary/50 dark:placeholder:text-dark-primary/50 text-light-primary dark:text-dark-primary',
                error && 'border-red-500 dark:border-red-500',
              )}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={isPassword && !showPassword}
              {...rest}
            />

            {isPassword && (
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className='absolute right-4 top-5'
              >
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  color={iconColor}
                  size={22}
                />
              </Pressable>
            )}
          </CView>
        )}
      />

      {error && (
        <CText className='text-red-500 dark:text-red-500 text-sm'>{`${error}`}</CText>
      )}
    </CView>
  )
}

export default RHFInput
