import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IExpense } from 'src/assets/models/expenses.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenseListUrl = 'assets/mock/expense.json';
  constructor(private http: HttpClient) { }
  getAllExpenses(): Observable<IExpense[]> {
    return this.http.get<IExpense[]>(this.expenseListUrl);
  }
}
