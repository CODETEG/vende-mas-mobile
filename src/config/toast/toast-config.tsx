import { BaseToast, ToastOptions } from 'react-native-toast-message'

export const toastConfig = {
  success: (props: ToastOptions) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#2ecc71' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 15, fontWeight: '500' }}
      text2Style={{ fontSize: 13 }}
    />
  ),
  error: (props: ToastOptions) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#e74c3c' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 15, fontWeight: '500' }}
      text2Style={{ fontSize: 13 }}
    />
  ),
  info: (props: ToastOptions) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#2196F3' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{ fontSize: 15, fontWeight: '500' }}
      text2Style={{ fontSize: 13 }}
    />
  ),
}
