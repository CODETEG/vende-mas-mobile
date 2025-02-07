import { colors } from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import TabsDrawer from '@/components/layout/tabs-drawer'
import { StatusBar } from 'expo-status-bar'

const TabsLayout = () => {
  return (
    <>
      <Drawer
        drawerContent={TabsDrawer}
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.secondary.DEFAULT,
            width: '75%',
          },
          sceneStyle: {
            paddingHorizontal: 16,
            backgroundColor: colors.secondary.DEFAULT,
          },
          drawerActiveTintColor: '#007bff',
          drawerInactiveTintColor: '#6c757d',
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
