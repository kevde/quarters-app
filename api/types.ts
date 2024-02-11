export type Account = {
  name: string;
  isExpense: boolean;
}

export enum MoneyType {
  CASH = 'cash',
  GCASH = 'gcash',
  MAYA = 'maya',
  CREDIT = 'credit',
  MIXED = 'mixed'
}

export type JournalEntry = {
  credit: Number;
  debit: Number;
  source: string;
  description: string;
  moneyType: MoneyType
}

export type Transaction = {
  date: Date;
  account: Account;
  credit: Number;
  debit: Number;
  source: string;
  description: string;
  entries: JournalEntry[];
}

export type Product = {
  name: string;
  code: string;
  photo: string;
  category: string;
}

export type Order = {

}
