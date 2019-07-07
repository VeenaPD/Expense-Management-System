import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Expense } from 'src/app/models/Expense';


@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnInit {
  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([new Date(), new Date()])
  });
  expense: Expense;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }
  onClickSave(){
    this.router.navigate(['/home']);
  }
  onClickClose(){
    this.router.navigate(['/home']);
  }
  onClickDelete(){
    this.router.navigate(['/home']);
  }

}
