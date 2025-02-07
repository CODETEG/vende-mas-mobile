import { UserRole } from '../constants/user-role'

export interface IUser {
  id: number
  username: string
  password: string
  role: UserRole
  active: boolean
  personId: number
}
