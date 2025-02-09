import { IApiResponse } from '@/config/http/api-response'
import Toast from 'react-native-toast-message'

const isProduction = process.env.NODE_ENV === 'production'
export const showResponseToast = (response: IApiResponse<unknown>) => {
  // Si no es displayable y estamos en producción, no mostramos nada
  if (!response.message.displayable && isProduction) {
    return
  }

  const { success, message } = response

  // Para mensajes no displayable en desarrollo
  if (!message.displayable) {
    Toast.show({
      type: 'info',
      text1: '🛠 Debug Message',
      text2: response.message.content.join(' '),
      position: 'top',
      visibilityTime: 3000,
      props: {
        style: {
          borderLeftColor: '#2196F3',
        },
      },
    })
    return
  }

  // Para mensajes displayable
  Toast.show({
    type: success ? 'success' : 'error',
    text1: success ? 'Operación exitosa' : 'Ha ocurrido un error',
    text2: message.content.join(' '),
    position: 'top',
    visibilityTime: 3000,
  })
}

export const showErrorToast = (message: string) => {
  Toast.show({
    type: 'error',
    text1: 'Error',
    text2: message,
    position: 'top',
  })
}
