import { TouchableOpacity } from 'react-native'
import { ITaskWithCustomerEmployee } from '../../models/tasks'
import { getTaskStatusLabel, TaskStatus } from '../../constants/task-status'
import { getTaskTypeLabel } from '../../constants/task-type'
import { Ionicons } from '@expo/vector-icons'
import CView from '@/custom-components/view'
import CText from '@/custom-components/text'

const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case 'PENDING':
      return 'text-yellow-500'
    case 'DONE':
      return 'text-green-500'
    case 'IN_PROGRESS':
      return 'text-blue-500'
    default:
      return 'text-gray-500'
  }
}

const TaskItem = ({ task }: { task: ITaskWithCustomerEmployee }) => {
  return (
    <TouchableOpacity
      // onPress={onPress}
      activeOpacity={0.9}
      className='bg-light-secondary rounded-lg p-3 active:opacity-90 '
    >
      <CView className='flex-row justify-between items-center mb-2'>
        <CText className={`${getStatusColor(task.status)} font-bold`}>
          {getTaskStatusLabel(task.status)}
        </CText>

        {task.type && (
          <CText className='text-xs text-light-support'>
            {getTaskTypeLabel(task.type)}
          </CText>
        )}
      </CView>

      {task.customer?.person && (
        <CText className='text-base font-semibold mb-1 text-light-tertiary'>
          {task.customer.person.firstName} {task.customer.person.firstSurname}
        </CText>
      )}

      {task.customer?.address && (
        <CText className='text-sm text-light-tertiary' numberOfLines={1}>
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
