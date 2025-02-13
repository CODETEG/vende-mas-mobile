export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const getTaskStatusLabel = (status: TaskStatus) => {
  const translations = {
    [TaskStatus.PENDING]: 'Pendiente',
    [TaskStatus.IN_PROGRESS]: 'En Progreso',
    [TaskStatus.DONE]: 'Finalizado',
  }
  return translations[status]
}

export const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case TaskStatus.PENDING:
      return 'text-yellow-500'
    case TaskStatus.DONE:
      return 'text-green-500'
    case TaskStatus.IN_PROGRESS:
      return 'text-blue-500'
    default:
      return 'text-gray-500'
  }
}
