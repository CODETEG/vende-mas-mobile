import { useMutation } from '@tanstack/react-query'
import { ISignInReq } from '../models/sign-in-dto'
import { authApi } from '../api/auth-api'
import { tokenStorage } from '@/common/utils/token-storage'
import { useAuthStore } from '../context/use-auth-store'
import { useRouter } from 'expo-router'

export const useSignIn = () => {
  const router = useRouter()
  const setUser = useAuthStore((state) => state.setUser)

  return useMutation({
    mutationFn: async (values: ISignInReq) => {
      const data = await authApi.signIn(values)

      if (data) {
        tokenStorage.setToken(data.token)

        const user = await authApi.getMe()
        setUser(user)

        router.replace('/(menus)/tasks')
      }

      return data!
    },
  })
}

export const useValidateToken = () => {
  const setUser = useAuthStore((state) => state.setUser)
  const clearUser = useAuthStore((state) => state.clearUser)

  return useMutation({
    mutationFn: async () => {
      const token = await tokenStorage.getToken()
      if (!token) {
        clearUser()
        return false
      }

      const data = await authApi.getMe()
      setUser(data)

      return true
    },
  })
}

export const useSignOut = () => {
  const clearUser = useAuthStore((state) => state.clearUser)
  const router = useRouter()

  const signOut = async () => {
    router.replace('/')
    await tokenStorage.removeToken()
    clearUser()
  }

  return signOut
}
