import { apiClient } from '@/config/http/api-client'
import { TASKS_API_ROUTES } from '../constants/tasks-api-routes'
import { ITaskWithCustomerEmployee } from '../models/tasks'

interface TaskQueryParams {
  userId: number
  date: string // ISO date string
}

export const tasksApi = {
  async findAllByDateAndUserInRoute(params: TaskQueryParams) {
    const response = await apiClient.get<ITaskWithCustomerEmployee[]>(
      TASKS_API_ROUTES.FIND_ALL_BY_DATE_AND_USER_IN_ROUTE,
      { params },
    )
    return response.data
  },
}
