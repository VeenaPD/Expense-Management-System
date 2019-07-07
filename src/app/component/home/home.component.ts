import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/Expense';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  expenseList: Expense[];

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
