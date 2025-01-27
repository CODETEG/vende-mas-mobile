import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Ionicons } from '@expo/vector-icons'

import { View, Text, TextInput, TextInputProps, Pressable } from 'react-native'

interface Props extends TextInputProps {
  name: string
  label: string
  className?: string
  isPassword?: boolean
}

const RHFInput = ({ name, label, className, isPassword, ...rest }: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    control,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message

  return (
    <View className={`gap-2 ${className} w-full`}>
      <Text className='text-gray-700 text-sm'>{label}</Text>

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => (
          <View className='relative'>
            <TextInput
              {...rest}
              className={`flex-1  font-psemibold text-base w-full h-16 px-4 bg-black-100 rounded-xl border border-black-200 focus:border-secondary ${error ? 'border border-red-500' : ''}`}
              placeholderTextColor='#7B7B8B'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={isPassword && !showPassword}
            />

            {isPassword && (
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                className='absolute right-4 top-5'
              >
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  color='#1F2937'
                  size={22}
                />
              </Pressable>
            )}
          </View>
        )}
      />

      {error && (
        <Text className='text-red-500 text-sm font-pregular'>{`${error}`}</Text>
      )}
    </View>
  )
}

export default RHFInput
