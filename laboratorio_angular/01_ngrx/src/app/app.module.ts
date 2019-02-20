import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersModule } from './members/members.module';

/*ngrx*/
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MemberDetailComponent,
  ],
  imports: [
    BrowserModule,
    MembersModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
