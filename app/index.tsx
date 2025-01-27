import { Redirect } from 'expo-router'

const HomePage = () => {
  return <Redirect href={'/(auth)/sign-in'} />
}

export default HomePage
