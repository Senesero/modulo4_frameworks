import { InjectionToken } from '@angular/core';
import { CreateGameComponent } from '../games/create-game.component';

export const CHECK_DIRTY_TOKEN = new InjectionToken('checkDirty');

export function checkDirtyService(component: CreateGameComponent): boolean {
    if (component.isDirty) {
        return window.confirm('Did not save, do you want to leave?');
    }
    return true;
}
