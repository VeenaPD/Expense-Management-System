import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { IExpense } from '../../assets/models/expenses.model';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  @Input('expenseItems') expenseItems : IExpense[];
  @Output('onEdit')onEdit: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
