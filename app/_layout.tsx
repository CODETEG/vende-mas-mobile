import '@/global.css'

import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import { StatusBar } from 'expo-status-bar'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@/config/http/query-client'
import { toastConfig } from '@/config/toast/toast-config'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useThemeColor } from '@/common/hooks/use-theme-color'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../src/assets/fonts/SpaceMono-Regular.ttf'),
  })
  const bgColor = useThemeColor({}, 'tertiary')

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
                backgroundColor: bgColor,
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
