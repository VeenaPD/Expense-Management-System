import { ICategory } from './category.model';

export interface IExpense {
  id: string;
  category: ICategory;
  title: string;
  expenseAmount: number;
  date: Date;
  isDeleted: boolean;
}
