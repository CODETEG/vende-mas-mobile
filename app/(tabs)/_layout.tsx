import { colors } from '@/constants/colors'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          paddingHorizontal: 16,
          backgroundColor: colors.white.DEFAULT,
        },
      }}
    >
      <Tabs.Screen name='tasks' />
      {/* <Stack.Screen name='sign-up' /> */}
    </Tabs>
  )
}

export default TabsLayout
