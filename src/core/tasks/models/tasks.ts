import { ICustomerWithPerson } from '@/core/customers/models/customer'
import { TaskStatus } from '../constants/task-status'
import { TaskType } from '../constants/task-type'

export interface ITask {
  id: number
  type: TaskType
  status: TaskStatus
  completionDate: Date | null
  assignedDate: Date | null
  priority: boolean
  customerId: number
  completedByEmployeeId: number | null
}

export interface ITaskWithCustomerEmployee extends ITask {
  customer: ICustomerWithPerson
}
