import { WorkflowService } from './workflow.service';
import { Transition } from '@uirouter/angular';

import { SurfaceWelcomeComponent } from '../surfacewelcome/surfacewelcome.component';
import { SurfaceInfoComponent } from '../surfaceinfo/surfaceinfo.component';
import { SurfaceHostComponent } from '../surfacehost/surfacehost.component';
import { SurfacePhotoComponent } from '../surfacephoto/surfacephoto.component';
import { SurfacePolicyComponent } from '../surfacepolicy/surfacepolicy.component';
import { SurfaceConfirmComponent } from '../surfaceconfirm/surfaceconfirm.component';

export const SurfaceWelcomeState = { name: 'welcome' , url: '/welcome', component:SurfaceWelcomeComponent};
export const SurfaceInfoState = { name: 'info' , url: '/info', component:SurfaceInfoComponent};
export const SurfaceHostState = { name: 'host' , url: '/host', component:SurfaceHostComponent};
export const SurfacePhotoState = { name: 'photo' , url: '/photo', component:SurfacePhotoComponent};
export const SurfacePolicyState = { name: 'policy' , url: '/policy', component:SurfacePolicyComponent};
export const SurfaceConfirmState = { name: 'confirm' , url: '/confirm', component:SurfaceConfirmComponent};

export function verifyWorkFlow(transition : Transition, state : any) {
    console.log("Entered '" + state.name + "' state.");
    const $stateService = transition.router.stateService;
    const workflowService = transition.injector().get(WorkflowService);
    // If any of the previous steps is invalid, go back to the first invalid step
    let firstState = workflowService.getFirstInvalidStep(state.name);
    if (firstState.length > 0) {
        console.log("Redirected to '" + firstState + "' state which it is the first invalid step.");
        return $stateService.target(firstState);
    };
}

export const APP_STATES = [
    SurfaceWelcomeState,
    SurfaceInfoState,
    SurfaceHostState,
    SurfacePhotoState,
    SurfaceConfirmState,
]

