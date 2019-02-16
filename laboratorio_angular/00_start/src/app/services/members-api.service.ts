import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MemberEntity } from '../members/models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersApiService {
  constructor(private http: HttpClient) { }

  getAllMembers(organizationName: string): Observable<MemberEntity[]> {
    const gitHubMembersUrl = `https://api.github.com/orgs/${organizationName}/members`;
    return this.http.get<MemberEntity[]>(gitHubMembersUrl);
  }

  getMember(member: string): Observable<MemberEntity> {
    const gitHubMemberUrl = `https://api.github.com/users/${member}`;
    return this.http.get<MemberEntity>(gitHubMemberUrl);
  }
}
