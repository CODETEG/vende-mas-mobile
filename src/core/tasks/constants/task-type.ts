export enum TaskType {
  SALE = 'SALE',
  COLLECTION = 'COLLECTION',
  QUOTATION = 'QUOTATION',
}

export const getTaskTypeLabel = (type: TaskType) => {
  const translations = {
    [TaskType.SALE]: 'Venta',
    [TaskType.COLLECTION]: 'Cobranza',
    [TaskType.QUOTATION]: 'Cotización',
  }
  return translations[type]
}
