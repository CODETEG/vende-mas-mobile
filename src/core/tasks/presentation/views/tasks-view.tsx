import { useAuthStore } from '@/core/auth/context/use-auth-store'
import CSafeView from '@/custom-components/safe-view'
import { Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { useFindAllTasksByDateUser } from '../../hooks/use-tasks-service'
import TaskItem from '../components/task-item'

const TasksView = () => {
  const { user } = useAuthStore()
  const currentDate = new Date('2021-01-01')

  const { data, isLoading, error, refetch } = useFindAllTasksByDateUser(
    user!.id,
    currentDate,
  )

  if (isLoading) return <ActivityIndicator />
  if (error) return <Text>Error loading tasks</Text>

  return (
    <CSafeView>
      <FlatList
        data={data}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingVertical: 4,
          gap: 15,
          paddingHorizontal: 16,
        }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        showsVerticalScrollIndicator={false}
      />
    </CSafeView>
  )
}

export default TasksView
