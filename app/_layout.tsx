import '@/global.css'

import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import { StatusBar } from 'expo-status-bar'
import { colors } from '@/constants/colors'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@/config/http/query-client'
import { toastConfig } from '@/config/toast/toast-config'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../src/assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: colors.secondary.DEFAULT,
              },
            }}
          >
            <Stack.Screen name='index' />

            <Stack.Screen name='(auth)' />

            <Stack.Screen name='(tabs)' />
          </Stack>

          <StatusBar style='inverted' />

          <Toast config={toastConfig} />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </>
  )
}

export default RootLayout
