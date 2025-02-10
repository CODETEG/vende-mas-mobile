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
