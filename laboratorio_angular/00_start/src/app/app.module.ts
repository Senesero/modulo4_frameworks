import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersModule } from './members/members.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
