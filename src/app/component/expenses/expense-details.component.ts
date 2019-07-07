import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Expense } from 'src/app/models/Expense';
import { ExpenseCategory } from 'src/app/models/ExpenseCategory';
import { ExpenseCategoryService } from 'src/app/services/expense-category.service';
import { ExpenseService } from 'src/app/services/expense.service';
import { take } from 'rxjs/operators';


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

  title:string;
  amount:number;
  category:ExpenseCategory;
  id:string;
  isNewExpense:boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,public expenseCatService:ExpenseCategoryService,public expenseService:ExpenseService) { }

  ngOnInit() {
    let {params} = this.route.snapshot;
    let id = params['id'];
    if(id === 'create'){
      this.initialiseNewExpense();
      this.isNewExpense = true;
    } else {
      this.id = id;
      this.getExpenseById(id);
    }
  }

  initialiseNewExpense(){
    this.expenseCatService.getAllExpenseCategories().pipe(take(1)).subscribe(e => {
        this.title = '';
        this.amount = 0;
        this.category = e[0];
    });
  }
  getExpenseById(id){
    this.expenseService.getExpenseById(id).pipe(take(1)).subscribe(exp => {
      if(exp){
        this.title = exp.title;
        this.amount = exp.amount;
        this.category = exp.category;
      }
    });
  }
  isExpenseValid(){
    return this.title && this.amount && this.category && true;
  }
  createExpense(){
    this.expenseService.addExpense(this.title,this.amount,this.category);
  }
  updateExpense(){
    let exp:Expense = <any>{
      id:this.id,
      amount:this.amount,
      category:this.category,
      title:this.title
    }
    this.expenseService.updateExpense(exp)
  }
  deleteExpense(){
      this.expenseService.toggleExpense(this.id);
  }
  onExpenseCategorySelected(id:string){
    this.expenseCatService.getExpenseCategoryById(id).pipe(take(1)).subscribe(cat => {
      this.category = cat;
    })
  }

  save(){
    if(this.isNewExpense){
      this.createExpense();
    } else {
      this.updateExpense();
    }
  }

  onClickSave(){
    this.save();
    this.router.navigate(['/home']);
  }
  onClickClose(){
    this.router.navigate(['/home']);
  }
  onClickDelete(){
    this.deleteExpense();
    this.router.navigate(['/home']);
  }

}
