import SButton from '@/components/ui/SButton'
import CImage from '@/custom-components/CImage'
import CSafeView from '@/custom-components/CSafeView'
import CText from '@/custom-components/CText'
import CView from '@/custom-components/CView'
import { router } from 'expo-router'

const HomePage = () => {
  return (
    <CSafeView className='justify-center items-center min-h-[85vh] px-4'>
      {/* <CImage
        source={images.sales}
        className='w-[130px] h-[84px]'
        resizeMode='contain'
      /> */}

      <CImage
        // source={images.frenecIcon}
        className='max-w-[380px] w-full h-[300px]'
        resizeMode='contain'
      />

      <CView className='relative mt-5'>
        <CText className='text-3xl font-bold text-center text-tertiary'>
          Potencia tus ventas con{' '}
          <CText className='text-primary'>VendeMas</CText>
        </CText>

        <CImage
          // source={images.path}
          className='w-[136px] h-[15px] absolute -bottom-3 left-40'
          resizeMode='contain'
        />
      </CView>

      <CText className='text-base font-pregular text-tertiary my-7 text-center'>
        Donde la creatividad se encuentra con la innovación: emprende un viaje
        de exploración sin límites con Aora
      </CText>

      <SButton
        title='Comenzar'
        onPress={() => router.push('/')}
        className='w-full mt-4'
      />
    </CSafeView>
  )
}

export default HomePage
