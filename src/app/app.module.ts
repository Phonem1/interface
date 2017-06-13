import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
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
import { SurfaceinfoComponent } from './surfaceinfo/surfaceinfo.component';
import { SurfacehostComponent } from './surfacehost/surfacehost.component';
import { SurfacephotoComponent } from './surfacephoto/surfacephoto.component';
import { SurfacepolicyComponent } from './surfacepolicy/surfacepolicy.component';
import { SurfaceconfirmComponent } from './surfaceconfirm/surfaceconfirm.component';
import { GlobalGeneralService } from './utilities/globalgeneral.service';



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
    SurfaceinfoComponent, 
    SurfacehostComponent, 
    SurfacephotoComponent, 
    SurfacepolicyComponent, 
    SurfaceconfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ GlobalGeneralService ],
  bootstrap: [ AppComponent ]  
})


export class AppModule { }
