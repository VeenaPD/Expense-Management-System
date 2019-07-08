# Expense Management System

## Introduction

This is an Expense Management System frontend developed using `Angular` and `Typescript`, `NgRx` provides state management, isolation of side effects, entity collection management, router bindings, code generation, and developer tools. It uses `Local Storage` to store data.

## Description

In Expense Management System, users can define budget in settings.In addition to defining categories in which expenses can be made. User can Add, Edit, Delete expenses in any of the categories.

The following page shows the expense trend dashboard and expenses list

![alt text](https://github.com/VeenaPD/Expense-Management-System/blob/master/src/assets/images/dashboard.PNG)

## Features

1. Update total budget
2. Add categories
3. Delete category
4. Undo deleted category
5. Add Expense
6. Edit Expense.
7. Delete Expense (Items are Soft deleted, entry will not be deleted in local storage)
8. Undo deleted expense
9. Expense and budget summary represented using Pie Charts

## Documentation

See the [Wiki](https://github.com/VeenaPD/Expense-Management-System/wiki) for full documentation, operational details and other information.

## Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng generate action action-name` to generate a new actions of NgRx. You can also use `ng generate effect|entity|feature|reducer|store`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
