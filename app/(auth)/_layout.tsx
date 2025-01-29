import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { colors } from '@/constants/colors'
import { tokenStorage } from '@/shared/utils/token-storage'
import { Redirect, Stack } from 'expo-router'

const AuthLayout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tokenAvailable, setTokenAvailable] = useState(false)

  useEffect(() => {
    const checkToken = async () => {
      const hasToken = await tokenStorage.hasToken()
      setTokenAvailable(hasToken)
      setIsLoading(false)
    }

    checkToken()
  }, [])

  if (isLoading) {
    // Puedes mostrar un spinner o algún indicador de carga mientras se verifica el token
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color={colors.primary.DEFAULT} />
      </View>
    )
  }

  if (tokenAvailable) {
    return <Redirect href={'/(tabs)/tasks'} />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingHorizontal: 16,
          backgroundColor: colors.white.DEFAULT,
        },
      }}
    >
      <Stack.Screen name='sign-in' />
      {/* <Stack.Screen name='sign-up' /> */}
    </Stack>
  )
}

export default AuthLayout
