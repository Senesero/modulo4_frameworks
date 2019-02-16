import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Seller } from '../models/seller.model';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styles: []
})
export class SellerListComponent implements OnChanges {
  @Input() sellers: Seller[];
  @Input() sortBy: string;
  @Input() filterBy: string;
  visibleSellers: Seller[];

  private sortSellersReactions = {
    ['asc']: (current: Seller, after: Seller) => after.price - current.price,
    ['desc']: (current: Seller, after: Seller) => current.price - after.price,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterBy']) {
      this.visibleSellers = this.filterSellers(changes['filterBy'].currentValue);
    }
    if(changes['sortBy']) {
      this.sortSellers(changes['sortBy'].currentValue);
    }
  }

  private filterSellers = (filter: string): Seller[] => (
    this.sellers.filter(
      (s) => filter === 'all' || s.amount > 0
    )
  )

  private sortSellers = (sortBy: string): void => {
    this.visibleSellers.sort(this.sortSellersReactions[sortBy]);
  }
}
