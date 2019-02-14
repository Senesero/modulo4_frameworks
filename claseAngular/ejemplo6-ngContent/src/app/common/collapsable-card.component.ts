import { Component } from '@angular/core';

@Component({
  selector: 'app-collapsable-card',
  template: `
    <div (click)="toggleContent()" class="card pointable card-block bg-faded">
      <h4>
        <ng-content select="[card-title]"></ng-content>
      </h4>
      <ng-content *ngIf="visible" select="[card-body]"></ng-content>
    </div>
  `,
  styles: [`
    .pointable { cursor: pointer; }
  `]
})
export class CollapsableCardComponent {
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }

}
