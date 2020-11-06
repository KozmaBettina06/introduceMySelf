import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HobbyComponent } from './hobby/hobby.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { CVComponent } from './c-v/c-v.component';


const appRoutes:Routes=[
  {path:'hobbi', component:HobbyComponent},
  {path:'', component:MainPageComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'CV', component:CVComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HobbyComponent,
    HeaderComponent,
    ProjectsComponent,
    CVComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
