import { colors } from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'
import TabsDrawer from '@/components/layout/tabs-drawer'

const TabsLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={TabsDrawer}
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.white.DEFAULT,
            width: '75%',
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
    </GestureHandlerRootView>
  )
}

export default TabsLayout
