import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from 'src/app/models/Expense';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  expenseList: Expense[] = [{
    "id": "1",
    "category": {
      "category": "Emma"
    },
    "title": "Burthom",
    "amount": 77,
    "date": "7/25/2018",
    "isDeleted": "true"
  }, {
    "id": "2",
    "category": {
      "category": "Barnaby"
    },
    "title": "Kinnane",
    "amount": 32,
    "date": "8/31/2018",
    "isDeleted": "true"
  }, {
    "id": "3",
    "category": {
      "category": "Rozina"
    },
    "title": "Rebbeck",
    "amount": 47,
    "date": "5/6/2019",
    "isDeleted": "true"
  }, {
    "id": "4",
    "category": {
      "category": "Donna"
    },
    "title": "Kensington",
    "amount": 3,
    "date": "2/4/2019",
    "isDeleted": "true"
  }, {
    "id": "5",
    "category": {
      "category": "Darline"
    },
    "title": "Meechan",
    "amount": 5,
    "date": "9/18/2018",
    "isDeleted": "true"
  }, {
    "id": "6",
    "category": {
      "category": "Lucilia"
    },
    "title": "Battersby",
    "amount": 11,
    "date": "7/24/2018",
    "isDeleted": "true"
  }, {
    "id": "7",
    "category": {
      "category": "Blanca"
    },
    "title": "Greser",
    "amount": 98,
    "date": "1/13/2019",
    "isDeleted": "true"
  }];

  constructor(public expenseService: ExpenseService) { }

  ngOnInit() {

  }
}
