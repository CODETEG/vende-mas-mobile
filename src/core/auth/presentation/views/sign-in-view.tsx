import CKeyboardView from '@/common/components/custom/keyboard-view'
import CScrollView from '@/common/components/custom/scroll-view'
import SignInForm from '../components/sign-in-form'

const SignInView = () => {
  return (
    <CKeyboardView>
      <CScrollView contentContainerClassName='items-center justify-center flex-grow pb-20 gap-5'>
        <SignInForm />
      </CScrollView>
    </CKeyboardView>
  )
}

export default SignInView
