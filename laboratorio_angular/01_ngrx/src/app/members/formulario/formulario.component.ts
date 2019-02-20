import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MemberEntity } from '../models/member.model';
import { MembersApiService } from 'src/app/services/members-api.service';

import { Store, select } from '@ngrx/store';

import * as fromMembers from '../state/state.reducer';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  members: MemberEntity[];
  organization: string;

  @Output() selectOrganization = new EventEmitter<string>();
  @Output() selectMembers = new EventEmitter<MemberEntity[]>();

  constructor(
    private store: Store<fromMembers.State>,
    private membersApi: MembersApiService
  ) {
  }

  ngOnInit() {
    this.store.pipe(
      select(fromMembers.getOrganization)
    ).subscribe(
      organization => {
        this.organization = organization;
        this.loadMembers(this.organization);
      }
    );
  }

  onSelectOrganization() {
    this.selectOrganization.emit(this.organization);
  }

  onSelectMembers() {
    this.selectMembers.emit(this.members);
  }

  onClick(organization: string) {
    this.store.dispatch({
      type: 'ORGANIZATION_CODE',
      payload: organization,
    });
  }

  loadMembers(organization: string) {
    this.members = [];
    this.membersApi.getAllMembers(organization)
      .subscribe((ms) => this.members = ms)
      .add(
        () => {
          this.onSelectOrganization();
          this.onSelectMembers();
        }
      );
  }
}
