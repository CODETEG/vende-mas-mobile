import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import TabsDrawer from '@/components/layout/tabs-drawer'
import { StatusBar } from 'expo-status-bar'
import { useThemeColor } from '@/common/hooks/use-theme-color'
import { useAuthStore } from '@/core/auth/context/use-auth-store'
import { Redirect } from 'expo-router'
import CView from '@/custom-components/view'
import { TouchableOpacity } from 'react-native'
import CText from '@/custom-components/text'
import CSafeView from '@/custom-components/safe-view'

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
        drawerContent={TabsDrawer}
        screenOptions={{
          drawerStyle: {
            backgroundColor: tertiaryColor,
            width: '75%',
          },
          sceneStyle: {
            backgroundColor: tertiaryColor,
          },
          drawerActiveTintColor: primaryColor,
          drawerInactiveTintColor: secondaryColor,
          overlayColor: 'rgba(0, 0, 0, 0.3)',
          // headerShown: false,
          header: ({ options, navigation }) => (
            <CSafeView className='flex-row items-center p-4 bg-light-primary'>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                activeOpacity={0.7}
              >
                <Ionicons name='menu' size={24} color={tertiaryColor} />
              </TouchableOpacity>

              <CText className='ml-4 font-bold text-lg text-light-tertiary'>
                {options.title}
              </CText>

              {/* Otros elementos del header */}
            </CSafeView>
          ),
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

      <StatusBar translucent />
    </>
  )
}

export default TabsLayout
