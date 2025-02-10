import { IPerson } from '@/core/people/models/person'

export interface ICustomer {
  id: number
  address: string
  zoneId: number
  active: boolean
  personId: number
}

export interface ICustomerWithPerson extends ICustomer {
  person: IPerson
}
