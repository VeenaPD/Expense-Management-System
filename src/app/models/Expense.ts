import { ExpenseCategory } from './ExpenseCategory';

export interface Expense {
  id: string;
  category: ExpenseCategory;
  title: string;
  amount: number;
  date: Date;
  isDeleted: boolean;
}
