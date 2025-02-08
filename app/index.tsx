import { useThemeColor } from '@/common/hooks/use-theme-color'
import { useAuthStore } from '@/core/auth/context/use-auth-store'
import { useValidateToken } from '@/core/auth/hooks/use-auth-service'
import CView from '@/custom-components/view'
import { Redirect } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

const HomePage = () => {
  const primaryColor = useThemeColor({}, 'primary')
  const validateToken = useValidateToken()
  const { user } = useAuthStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await validateToken.mutateAsync()
        setIsLoading(false)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        setIsLoading(false)
      }
    }

    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <CView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size='large' color={primaryColor} />
      </CView>
    )
  }

  return user ? (
    <Redirect href={'/(tabs)/tasks'} />
  ) : (
    // <CView>
    //   <CText>Home Page</CText>
    // </CView>

    <Redirect href={'/(auth)/sign-in'} />
  )
}

export default HomePage
