import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ExpenseDetailsComponent } from './expenses/expense-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    HomeComponent,
    SettingsComponent,
    SideMenuComponent,
    ExpenseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
