import { useThemeColor } from '@/common/hooks/use-theme-color'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  const bgColor = useThemeColor({}, 'tertiary')

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingHorizontal: 16,
          backgroundColor: bgColor,
        },
      }}
    >
      <Stack.Screen name='sign-in/index' />
      {/* <Stack.Screen name='sign-up' /> */}
    </Stack>
  )
}

export default AuthLayout
