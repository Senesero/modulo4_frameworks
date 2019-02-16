import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { appRoutes } from './app.routes';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersTableComponent, MemberRowComponent, MemberHeadComponent } from './members/members-table';
import { TitlePageComponent } from './members/title-page/title-page.component';
import { FormularioComponent } from './members/formulario/formulario.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MemberDetailComponent,
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
    TitlePageComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
