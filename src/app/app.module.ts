import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { LikeComponent } from './like/like.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetsComponent } from './tweets/tweets.component';
import { AppComponent } from './app.component';
import { TweetService } from './tweet.service';
import { ZippyComponent } from './zippy/zippy.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PhotoComponent } from './photo/photo.component';
import { TcComponent } from './tc/tc.component';
import { TickComponent } from './tick/tick.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControlsComponent } from './controls/controls.component';

import { SurfaceWelcomeComponent } from './surfacewelcome/surfacewelcome.component';
import { SurfaceInfoComponent } from './surfaceinfo/surfaceinfo.component';
import { SurfaceHostComponent } from './surfacehost/surfacehost.component';
import { SurfacePhotoComponent } from './surfacephoto/surfacephoto.component';
import { SurfacePolicyComponent } from './surfacepolicy/surfacepolicy.component';
import { SurfaceConfirmComponent } from './surfaceconfirm/surfaceconfirm.component';

/*Shared Service */
import { GlobalGeneralService } from './utilities/globalgeneral.service';
import { WorkflowService } from './utilities/workflow.service';

/* App Router */
import { APP_STATES } from './utilities/app.states';
import { UIRouterConfigFn } from './utilities/router.config';



@NgModule({
  declarations: [    
    AppComponent, 
    LikeComponent, 
    TweetComponent, 
    TweetsComponent, 
    ZippyComponent, 
    HomeComponent, 
    UserComponent, 
    PhotoComponent, 
    TcComponent, 
    TickComponent, 
    NavbarComponent,
    ControlsComponent, 
    SurfaceWelcomeComponent, 
    SurfaceInfoComponent, 
    SurfaceHostComponent, 
    SurfacePhotoComponent, 
    SurfacePolicyComponent, 
    SurfaceConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,     
      config: UIRouterConfigFn
     })   
  ],
  providers: [ 
    { provide: GlobalGeneralService , useClass: GlobalGeneralService },
    { provide: WorkflowService, useClass: WorkflowService }

    ],
  bootstrap: [ AppComponent ]  
})


export class AppModule { }
