import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContentComponent } from './components/content/content.component';
import { Content2Component } from './components/content2/content2.component';
import { SidedivComponent } from './components/content2/sidediv/sidediv.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReqinputComponent } from './components/content/reqinput/reqinput.component';
import { RequestsComponent } from './components/content/requests/requests.component';
import { LoginComponent } from './components/login/login.component';
import { SolodivComponent } from './components/content2/solodiv/solodiv.component';
import { UsersComponent } from './components/users/users.component';
import { UserformComponent } from './components/users/userform/userform.component';

import { HighlightDirective } from './Directives/highlight.directive';
import { ScaleDirective } from './Directives/scale.directive';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewuserComponent } from './components/users/viewuser/viewuser.component';   //must be imported manually


const appRoutes: Routes = [
  {path:'',component:SliderComponent},             //the wrong sorting may cause conflict
  {path:'slider',redirectTo:'', pathMatch:'full'},
  {path:'products',component:Content2Component},
  {path:'products/:id',component:SolodivComponent},
  {path:'requests',component:ContentComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'users/new',component:UserformComponent},
  {path:'users/edit/:id',component:UserformComponent},
  {path:'users/:id',component:ViewuserComponent},
  {path:'**',component:FooterComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    ContentComponent,
    Content2Component,
    SidedivComponent,
    FooterComponent,
    ReqinputComponent,
    RequestsComponent,
    LoginComponent,
    SolodivComponent,
    UsersComponent,
    UserformComponent,
    HighlightDirective,
    ScaleDirective,
    ViewuserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
