import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { GithubService } from './github.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ReposComponent } from './repos/repos.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfileComponent,
    NavbarComponent,
    UserpageComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: ':username', component: UserpageComponent}
    ])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
