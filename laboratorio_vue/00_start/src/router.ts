import Router, { RouteConfig } from 'vue-router'
import { MemberTable } from './components/memberTable'
import { MemberComponent } from './components/member'

const routes: RouteConfig[] = [
    { path: '/', redirect: '/members' },
    { path: '/members', component: MemberTable },
    { path: '/member/:login', component: MemberComponent, props: true},
];

export const router = new Router({
    routes,
})