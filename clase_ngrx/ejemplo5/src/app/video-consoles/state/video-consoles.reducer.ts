import * as fromRoot from '../../state/app.state';
import { VideoConsoleModel } from '../video-console.model';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface VideoConsolesState {
    showVideoConsoleCode: boolean;
    currentVideoConsole: VideoConsoleModel;
    videoconsoles: VideoConsoleModel[];
}

export interface State extends fromRoot.State {
    videoconsoles: VideoConsolesState;
}

const initialState: VideoConsolesState = {
    showVideoConsoleCode: true,
    currentVideoConsole: null,
    videoconsoles: [],
};

const getVideoConsolesFeatureState = createFeatureSelector<VideoConsolesState>('videoconsoles');

export const getShowVideoConsoleCode = createSelector(
    getVideoConsolesFeatureState,
    (state) => state.showVideoConsoleCode
);

export const getCurrentVideoConsole = createSelector(
    getVideoConsolesFeatureState,
    (state) => state.currentVideoConsole
);

export const getVideoConsoles = createSelector(
    getVideoConsolesFeatureState,
    (state) => state.videoconsoles
);

export const reducer = (state: VideoConsolesState = initialState, action): VideoConsolesState => {
    switch (action.type) {
        case 'TOGGLE_VIDEO_CONSOLE_CODE':
            console.log(`existins state: ${JSON.stringify(state)}`);
            console.log(`action payload: ${action.payload}`);
            return {
                ...state,
                showVideoConsoleCode: action.payload
            };
        default:
            return state;
    }
};
