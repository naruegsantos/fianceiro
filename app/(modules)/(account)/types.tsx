export interface IAccount {
  id: number,
  label: string,
  userId: number,
  accountCategory: AccountCategories,
  credits?: [],
  debits?: []
}

export type AccountCategories = 'REVENUE' | 'EXPENSE' | 'ASSET'