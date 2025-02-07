import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import CView from '@/custom-components/view'
import CImage from '@/custom-components/image'
import images from '@/constants/images'
import { useSignOut } from '@/core/auth/hooks/use-auth-service'
import { router } from 'expo-router'
import { useApiToast } from '@/common/hooks/use-api-toast'

const TabsDrawer = (props: DrawerContentComponentProps) => {
  const signOut = useSignOut()
  const { showToast } = useApiToast()

  const handleLogout = async () => {
    await signOut()

    router.replace('/')

    showToast(
      'Sesión cerrada',
      { content: ['Hasta luego, esperamos verte pronto.'], displayable: true },
      true,
    )
  }

  return (
    <CView className='flex-1'>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        {/* Encabezado del Drawer */}
        <CView className='flex justify-center items-center mb-5 h-28'>
          <CImage
            source={images.frenecIcon}
            resizeMode='contain'
            className='h-28'
          />
        </CView>

        {/* Lista de items */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <CView className='border-t border-gray-200 mb-2'>
        <DrawerItem
          style={{ paddingHorizontal: 10 }}
          label='Cerrar Sesión'
          onPress={handleLogout}
          icon={({ color, size }) => (
            <Ionicons name='log-out-outline' size={size} color='red' />
          )}
          labelStyle={{ color: 'red' }}
        />
      </CView>
    </CView>
  )
}

export default TabsDrawer
