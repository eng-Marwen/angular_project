import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { DemoComponent } from './demo/demo.component';
import { MyFirstDirectiveDirective } from './custom directives/my-first-directive.directive';
import { HostListnerDirective } from './custom directives/host-listner.directive';
import { AddnewComponent } from './addnew/addnew.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsGuard } from './Services-1/products-guard.service';
import { AuthService } from './Services-1/auth.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { deactivate } from './Services-1/deactivateGuard.service';

const appRoutes:Routes=[
  {path:'home',component:ContainerComponent},
  {path:'',component:ContainerComponent},
  {path:'contact',component:LoginComponent},
  {path:'products',component:DemoComponent,canActivate:[ProductsGuard]},
  {path:'SinIn',component:LoginComponent},
  {path:'SinUp',component:SignupComponent},
  {path:'contactUs',component:ContactUsComponent,canDeactivate:[deactivate]}
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    DemoComponent,
    MyFirstDirectiveDirective,
    HostListnerDirective,
    AddnewComponent,
    LoginComponent,
    SignupComponent,
    ContactUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductsGuard,AuthService,deactivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
