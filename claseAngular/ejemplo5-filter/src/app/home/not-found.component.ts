import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1 class="errrMessage">
      400'd
    </h1>
  `,
  styles: [`
    .errorMessage {
      margin-top: 10rem;
      font-size: 10rem;
      text-align: center;
    }
  `]
})
export class NotFoundComponent { }
