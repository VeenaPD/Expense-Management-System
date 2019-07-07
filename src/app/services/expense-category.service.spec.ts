import { TestBed } from '@angular/core/testing';

import { ExpenseCategoryService } from './expense-category.service';

describe('ExpenseCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseCategoryService = TestBed.get(ExpenseCategoryService);
    expect(service).toBeTruthy();
  });
});
