import { colors } from '@/constants/colors'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingHorizontal: 16,
          backgroundColor: colors.secondary.DEFAULT,
          // backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen name='sign-in/index' />
      {/* <Stack.Screen name='sign-up' /> */}
    </Stack>
  )
}

export default AuthLayout
