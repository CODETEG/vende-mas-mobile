import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import TabsDrawer from '@/components/layout/tabs-drawer'
import { StatusBar } from 'expo-status-bar'
import { useThemeColor } from '@/common/hooks/use-theme-color'

const TabsLayout = () => {
  const bgColor = useThemeColor({}, 'tertiary')
  const primaryColor = useThemeColor({}, 'primary')
  const secondaryColor = useThemeColor({}, 'secondary')

  return (
    <>
      <Drawer
        drawerContent={TabsDrawer}
        screenOptions={{
          drawerStyle: {
            backgroundColor: bgColor,
            width: '75%',
          },
          sceneStyle: {
            paddingHorizontal: 16,
            backgroundColor: bgColor,
          },
          drawerActiveTintColor: primaryColor,
          drawerInactiveTintColor: secondaryColor,
          headerShown: false,
          overlayColor: 'rgba(0, 0, 0, 0.3)',
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

      <StatusBar style='inverted' />
    </>
  )
}

export default TabsLayout
