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
          <View className='relative flex-row'>
            <TextInput
              {...rest}
              className={`text-base w-full h-16 px-4 rounded-xl border focus:border-yellow-500 ${error ? 'border border-red-500' : 'border-gray-400'}`}
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
                  color='#4B5563'
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
