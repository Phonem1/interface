import { BrowserModule } from '@angular/platform-browser';
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



@NgModule({
  declarations: [    
    AppComponent, LikeComponent, TweetComponent, TweetsComponent, ZippyComponent, HomeComponent, UserComponent, PhotoComponent, TcComponent, TickComponent, NavbarComponent, ControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ TweetService],
  bootstrap: [ AppComponent ]  
})


export class AppModule { }
