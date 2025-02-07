import { useMutation } from '@tanstack/react-query'
import { ISignInReq, ISignInRes } from '../models/sign-in-dto'
import { authService } from '../services/auth-service'
import { tokenStorage } from '@/common/utils/token-storage'

export const useSignIn = () => {
  return useMutation({
    mutationFn: async (values: ISignInReq): Promise<ISignInRes> => {
      const data = await authService.signIn(values)

      tokenStorage.setToken(data!.token)

      return data!
    },
  })
}
