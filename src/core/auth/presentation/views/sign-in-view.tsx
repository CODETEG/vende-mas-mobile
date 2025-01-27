import CKeyboardView from '@/custom-components/keyboard-view'
import CScrollView from '@/custom-components/scroll-view'
import SignInForm from '../components/sign-in-form'

const SignInView = () => {
  return (
    <CKeyboardView>
      <CScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName='items-center justify-center flex-grow pb-20 gap-5'
      >
        <SignInForm />
      </CScrollView>
    </CKeyboardView>
  )
}

export default SignInView
