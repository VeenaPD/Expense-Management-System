import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Expense } from 'src/app/models/Expense';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  @Input('expenseItems') expenseItems : Expense[];
  @Output('onEdit')onEdit: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
