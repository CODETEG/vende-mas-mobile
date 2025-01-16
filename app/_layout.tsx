import '@/global.css'

import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import { StatusBar } from 'expo-status-bar'
import { colors } from '@/constants/colors'

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
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.black.DEFAULT,
          },
        }}
      >
        <Stack.Screen name='index' />

        {/* <Stack.Screen name='(auth)' /> */}

        {/* <Stack.Screen name='(tabs)' /> */}
      </Stack>

      <StatusBar style='auto' />

      <Toast />
    </>
  )
}

export default RootLayout
