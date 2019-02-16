import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MemberEntity } from '../models/member.model';
import { MembersApiService } from 'src/app/services/members-api.service';

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

  constructor(private membersApi: MembersApiService) {
    this.organization = 'Lemoncode';
  }

  ngOnInit() {
    this.loadMembers(this.organization);
  }

  onSelectOrganization() {
    this.selectOrganization.emit(this.organization);
  }

  onSelectMembers() {
    this.selectMembers.emit(this.members);
  }

  onClick(organization: string) {
    this.organization = organization;
    this.loadMembers(organization);
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
