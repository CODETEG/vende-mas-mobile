import { TouchableOpacity } from 'react-native'
import { ITaskWithCustomerEmployee } from '../../models/tasks'
import { getStatusColor, getTaskStatusLabel } from '../../constants/task-status'
import { getTaskTypeLabel } from '../../constants/task-type'
import { Ionicons } from '@expo/vector-icons'
import CView from '@/custom-components/view'
import CText from '@/custom-components/text'
import { router } from 'expo-router'

const onPress = (id: number) => {
  router.push(`/(tabs)/tasks/${id}`)
}

const TaskItem = ({ task }: { task: ITaskWithCustomerEmployee }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(task.id)}
      activeOpacity={0.9}
      className='bg-light-support border-b border-light-support rounded-lg p-3 active:opacity-70'
    >
      <CView className='flex-row justify-between items-center mb-2'>
        <CText className={`${getStatusColor(task.status)} font-bold`}>
          {getTaskStatusLabel(task.status)}
        </CText>

        {task.type && (
          <CText className='text-xs'>{getTaskTypeLabel(task.type)}</CText>
        )}
      </CView>

      {task.customer?.person && (
        <CText className='text-base font-semibold mb-1'>
          {task.customer.person.firstName} {task.customer.person.firstSurname}
        </CText>
      )}

      {task.customer?.address && (
        <CText className='text-sm' numberOfLines={1}>
          {task.customer.address}
        </CText>
      )}

      {true && (
        <CView className='absolute bottom-3 right-2'>
          <Ionicons name='radio-button-on-outline' size={18} color='#ef4444' />
        </CView>
      )}
    </TouchableOpacity>
  )
}

export default TaskItem
