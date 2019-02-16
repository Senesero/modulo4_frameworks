import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MemberEntity } from '../models/member.model';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[];
  organization: string;

  constructor(private router: Router) {}

  getOrganization(organization: string) {
    this.organization = organization;
  }

  getMembers(members: MemberEntity[]) {
    this.members = members;
  }
}
