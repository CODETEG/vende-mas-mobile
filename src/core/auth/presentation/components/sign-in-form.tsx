import CImage from '@/common/components/custom/image'
import images from '@/constants/images'
import CText from '@/common/components/custom/text'
import { useSignInForm } from '../../hooks/use-sign-in-form'
import CButton from '@/common/components/custom/button'
import { FormProvider } from 'react-hook-form'
import RHFInput from '@/common/components/rhf/input'

const SignInForm = () => {
  const { form, isLoading, onSubmit } = useSignInForm()

  return (
    <FormProvider {...form}>
      <CImage source={images.frenecIcon} resizeMode='contain' />

      <CText className='text-2xl text-gray-900 font-medium my-4'>
        Bienvenido de vuelta!
      </CText>

      <RHFInput name='username' label='Usuario' className='mt-2' />

      <RHFInput
        name='password'
        isPassword
        label='Contraseña'
        className='mt-2'
      />

      <CButton
        onPress={form.handleSubmit(onSubmit)}
        className='mt-6 w-60 items-center h-16 justify-center rounded-xl bg-black active:opacity-80 disabled:opacity-50'
        disabled={isLoading}
      >
        <CText className='text-white'>Iniciar sesión</CText>
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
