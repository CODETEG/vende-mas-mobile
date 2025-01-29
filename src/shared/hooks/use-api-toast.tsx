import { IApiMessage, IApiResponse } from '@/config/http/api-response'
import { useCallback } from 'react'
import Toast, { ToastShowParams } from 'react-native-toast-message'

// Tipos de configuración para los toasts
type ToastConfig = {
  duration?: number
  position?: 'top' | 'bottom'
}

export const useApiToast = (config?: ToastConfig) => {
  const showToast = useCallback(
    (message: IApiMessage, success: boolean) => {
      const isProduction = process.env.NODE_ENV === 'production'

      // Si no es displayable y estamos en producción, no mostramos nada
      if (!message.displayable && isProduction) {
        return
      }

      // Configuración base del toast
      const baseConfig: ToastShowParams = {
        position: config?.position || 'top',
        visibilityTime: config?.duration || 3000,
        onPress: () => Toast.hide(),
      }

      // Para mensajes no displayable en desarrollo
      if (!message.displayable) {
        Toast.show({
          type: 'info',
          text1: '🛠 Debug Message',
          text2: message.content.join(' '),
          ...baseConfig,
          // Estilo específico para debug
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
        text1: success ? 'Éxito' : 'Error',
        text2: message.content.join(' '),
        ...baseConfig,
      })
    },
    [config],
  )

  const showApiResponse = useCallback(
    <T,>(response: IApiResponse<T>) => {
      showToast(response.message, response.success)
    },
    [showToast],
  )

  return {
    showToast,
    showApiResponse,
  }
}
