import { useMutation } from '@tanstack/react-query'
import { ISignInReq, ISignInRes } from '../models/sign-in-dto'
import { authApi } from '../api/auth-api'
import { tokenStorage } from '@/common/utils/token-storage'
import { useAuthStore } from '../context/use-auth-store'

export const useSignIn = () => {
  return useMutation({
    mutationFn: async (values: ISignInReq): Promise<ISignInRes> => {
      const data = await authApi.signIn(values)

      tokenStorage.setToken(data!.token)

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

  const signOut = async () => {
    clearUser()
    await tokenStorage.removeToken()
  }

  return signOut
}
