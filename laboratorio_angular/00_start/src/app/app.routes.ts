import { Routes } from '@angular/router';

import { MembersTableComponent } from './members/members-table';
import { MemberDetailComponent } from './member-detail/member-detail.component';

export const appRoutes: Routes = [
    { path: 'members', component: MembersTableComponent },
    {
        path: 'members/:login',
        component: MemberDetailComponent,
    },
    { path: '', redirectTo: '/members', pathMatch: 'full' },
];
