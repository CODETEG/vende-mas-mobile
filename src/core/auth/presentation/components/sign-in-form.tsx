import CImage from '@/common/components/custom/image'
import images from '@/common/constants/images'
import CText from '@/common/components/custom/text'
import { useSignInForm } from '../../hooks/use-sign-in-form'
import { FormProvider } from 'react-hook-form'
import RHFInput from '@/common/components/rhf/input'
import SButton from '@/components/ui/button'

const SignInForm = () => {
  const { form, isLoading, onSubmit } = useSignInForm()

  return (
    <FormProvider {...form}>
      <CImage source={images.frenecIcon} resizeMode='contain' />

      <CText
        className='text-2xl font-bold my-4'
        // style={{ fontFamily: 'Inter-Bold' }}
      >
        Bienvenido de vuelta!
      </CText>

      <RHFInput
        placeholder='chu2409'
        name='username'
        label='Usuario'
        className='mt-2'
      />

      <RHFInput
        placeholder='********'
        name='password'
        isPassword
        label='Contraseña'
        className='mt-2'
      />

      <SButton
        onPress={onSubmit}
        className='mt-6 w-60 items-center h-16 justify-center'
        disabled={isLoading}
        title='Iniciar sesión'
      />

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
