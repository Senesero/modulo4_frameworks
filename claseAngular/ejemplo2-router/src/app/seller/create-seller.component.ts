import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SellerCategoryService } from '../services/seller-category.service';
import { SellerCategory } from '../models/seller-category.model';

const nameValid = (control: FormControl): { [key: string]: any } => {
  const firstLetter = control.value[0];
  return (!!firstLetter && (firstLetter !== firstLetter.toUpperCase())) ? { 'nameValid': 'invalid name' } : null;
};

interface Lookup {
  id: number;
  name: string;
}

interface TaxByCategory {
  taxId: number;
  taxName: string;
  categoryId: number;
}

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styles: [`
    .error {
      color: red;
    }
  `]
})
export class CreateSellerComponent implements OnInit {
  categoryLookupCollection: Lookup[];
  taxesByCategory: Array<TaxByCategory>;
  taxLookupCollection: Lookup[];
  newSellerForm: FormGroup;
  category: FormControl;
  tax: FormControl;
  name: FormControl;


  constructor(private sellerCategoryService: SellerCategoryService) { }

  saveSeller(formFieldValues) {
    console.log(formFieldValues);
  }

  private populateTaxLookupCollection(categoryId: number): void {
    this.taxLookupCollection = this.taxesByCategory.filter(tc => tc.categoryId === categoryId)
      .map<Lookup>(t => ({
        id: t.taxId,
        name: t.taxName
      }));
  }

  private initTaxControl() {
    this.tax.setValue('');
    this.tax.enable();
  }

  onChangeCategory(value: string) {
    this.populateTaxLookupCollection(+value);
    if (value) {
      this.initTaxControl();
    } else {
      this.tax.setValue('');
      this.tax.disable();
    }
  }

  private initForm() {
    this.category = new FormControl('', Validators.required);
    this.tax = new FormControl('', Validators.required);
    this.name = new FormControl('', [Validators.required, nameValid]);
    this.newSellerForm = new FormGroup({
      category: this.category,
      tax: this.tax,
      name: this.name,
    });
    this.tax.disable();
  }

  private populateCategoryLookupCollection(categories: SellerCategory[]): void {
    this.categoryLookupCollection = categories.map((sc) => ({
      id: sc.id,
      name: sc.name,
    }));
  }

  private populateTaxesByCategory(categories: SellerCategory[]): void {
    let taxesNormalized: Array<TaxByCategory> = [];
    categories.forEach(c => {
      const taxesByCategoryTemp = c.taxes.map<TaxByCategory>(t => ({
        categoryId: c.id,
        taxId: t.id,
        taxName: t.name,
      }));
      taxesNormalized = taxesNormalized.concat(taxesByCategoryTemp);
    });
    this.taxesByCategory = taxesNormalized;
  }

  ngOnInit() {
    const categories = this.sellerCategoryService.getSellerCategories();
    this.populateCategoryLookupCollection(categories);
    this.populateTaxesByCategory(categories);
    this.initForm();
  }

}
