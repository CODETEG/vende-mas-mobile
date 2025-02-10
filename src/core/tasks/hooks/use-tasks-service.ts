import { useQuery } from '@tanstack/react-query'
import { tasksApi } from '../api/tasks-api'

export const useFindAllTasksByDateUser = (userId: number, date: Date) => {
  return useQuery({
    queryKey: ['tasks', userId, date.toISOString()],
    queryFn: () =>
      tasksApi.findAllByDateAndUserInRoute({
        userId,
        date: date.toISOString(),
      }),
    enabled: !!userId, // Only run query if userId exists
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
  })
}
