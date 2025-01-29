import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignIn } from './use-auth-api'

const schema = z.object({
  username: z
    .string({ message: 'Ingrese el usuario' })
    .min(5, 'El usuario debe tener al menos 5 caracteres'),
  password: z
    .string({ message: 'Ingrese la contraseña' })
    .min(5, 'La contraseña debe tener al menos 5 caracteres'),
})

type FormFields = z.infer<typeof schema>

export const useSignInForm = () => {
  // const { setUser, setIsLoggedIn } = useGlobalContext()
  const { isPending, mutateAsync } = useSignIn()

  const form = useForm<FormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (data: FormFields) => {
    await mutateAsync(data)

    // router.push('/')
  }

  return {
    form,
    isLoading: isPending,
    onSubmit,
  }
}
