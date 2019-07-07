import { Component, OnInit } from '@angular/core';
import { IExpense } from 'src/assets/models/expenses.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  expenseList: IExpense[];
  rows;
  constructor(public expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.getAllExpenses().subscribe(
      (expenses) => {
        console.log(expenses);
        this.expenseList = expenses;
      }
    );
  }
}
