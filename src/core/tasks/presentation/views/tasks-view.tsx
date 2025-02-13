import { useAuthStore } from '@/core/auth/context/use-auth-store'
import { Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import { useFindAllTasksByDateUser } from '../../hooks/use-tasks-service'
import TaskItem from '../components/task-item'
import CView from '@/custom-components/view'

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
    <CView className='mt-4'>
      <FlatList
        data={data}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          // paddingVertical: 4,
          gap: 15,
          paddingHorizontal: 16,
        }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        showsVerticalScrollIndicator={false}
      />
    </CView>
  )
}

export default TasksView
