import CImage from '@/custom-components/image'
import images from '@/constants/images'
import CText from '@/custom-components/text'
import { useSignInForm } from '../../hooks/use-sign-in-form'
import CButton from '@/custom-components/button'
import { FormProvider } from 'react-hook-form'
import RHFInput from '@/components/rhf/input'

const SignInForm = () => {
  const { form, isLoading, onSubmit } = useSignInForm()

  return (
    <FormProvider {...form}>
      <CImage source={images.frenecIcon} resizeMode='contain' />

      <CText className='text-2xl text-gray-900 font-medium my-4'>
        Bienvenido de vuelta!
      </CText>

      <RHFInput name='username' label='Usuario' />

      <RHFInput name='password' isPassword label='Contraseña' />

      <CButton
        onPress={form.handleSubmit(onSubmit)}
        className='mt-4 w-60 items-center h-14 justify-center rounded-xl bg-slate-200 '
        disabled={isLoading}
      >
        <CText className='text-black'>Iniciar sesión</CText>
      </CButton>

      {/* <CView className='justify-center pt-5 flex-row gap-2'>
        <CText className='text-lg text-gray-100 font-pregular'>
          ¿No tienes una cuenta?
        </CText>

        <Link href={'/'} className='text-lg font-psemibold text-secondary'>
          Regístrate
        </Link>
      </CView> */}
    </FormProvider>
  )
}

export default SignInForm
