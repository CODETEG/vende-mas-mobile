import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { StatusBar } from 'expo-status-bar'
import { useThemeColor } from '@/common/hooks/use-theme-color'
import { useAuthStore } from '@/core/auth/context/use-auth-store'
import { Redirect } from 'expo-router'

const TabsLayout = () => {
  const tertiaryColor = useThemeColor({}, 'tertiary')
  const primaryColor = useThemeColor({}, 'primary')
  const secondaryColor = useThemeColor({}, 'secondary')

  const { user } = useAuthStore()

  if (!user) {
    return <Redirect href='/' />
  }

  return (
    <>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name='tasks/index'
          options={{
            title: 'Tareas',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='list' size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name='customers/index'
          options={{
            title: 'Clientes',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='people' size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name='products/index'
          options={{
            title: 'Productos',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='cube' size={size} color={color} />
            ),
          }}
        />
      </Drawer>

      <StatusBar style='auto' />
    </>
  )
}

export default TabsLayout
