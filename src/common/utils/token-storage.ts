/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage'

// Constante para la key del token
const TOKEN_KEY = '@MyApp:token'

// Funciones para manejar el token
export const tokenStorage = {
  // Guardar el token
  setToken: async (token: string) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token)
      return true
    } catch (error) {
      console.error('Error guardando el token:', error)
      return false
    }
  },

  // Obtener el token
  getToken: async () => {
    try {
      return await AsyncStorage.getItem(TOKEN_KEY)
    } catch (error) {
      console.error('Error obteniendo el token:', error)
      return null
    }
  },

  // Eliminar el token
  removeToken: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY)
      return true
    } catch (error) {
      console.error('Error eliminando el token:', error)
      return false
    }
  },

  // Verificar si existe un token
  hasToken: async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY)
      return !!token
    } catch (error) {
      console.error('Error verificando el token:', error)
      return false
    }
  },
}
