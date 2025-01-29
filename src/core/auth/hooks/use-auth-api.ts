import { useMutation } from '@tanstack/react-query'
import { ISignInReq, ISignInRes } from '../models/sign-in-dto'
import { authService } from '../services/auth-service'

export const useSignIn = () => {
  return useMutation({
    mutationFn: async (values: ISignInReq): Promise<ISignInRes> => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const data = await authService.signIn(values)

      return data!
    },
  })
}
