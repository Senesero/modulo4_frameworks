import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersApiService } from '../services/members-api.service';
import { MemberEntity } from '../members/models/member.model';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styles: []
})
export class MemberDetailComponent implements OnInit {
  member: MemberEntity;

  constructor(private route: ActivatedRoute, private membersApi: MembersApiService) { }

  ngOnInit() {
    this.membersApi.getMember(this.route.snapshot.params['login'])
      .subscribe((ms) => this.member = ms);
  }

}
