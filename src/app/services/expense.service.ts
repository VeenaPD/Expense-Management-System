import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenseListUrl = 'assets/mock/expense.json';
  constructor(private http: HttpClient) { }
  getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseListUrl);
  }
}
