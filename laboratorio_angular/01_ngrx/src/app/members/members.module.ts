import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent
} from './members-table';
import { TitlePageComponent } from './title-page/title-page.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from '../app-routing.module';

/*ngrx*/
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/state.reducer';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('members', reducer)
  ],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
    TitlePageComponent,
    FormularioComponent
  ],
  exports: [
    MembersTableComponent
  ]
})
export class MembersModule { }
