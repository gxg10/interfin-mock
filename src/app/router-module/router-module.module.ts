import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { DespreComponent } from '../despre/despre.component';
import { ServiciiComponent } from '../servicii/servicii.component';
import { StiriComponent } from '../stiri/stiri.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes =[
  {path:'home',
  component: HomeComponent},
  {path:'despre',
  component: DespreComponent},
  {path: 'servicii',
  component: ServiciiComponent},
  {path: 'stiri',
  component: StiriComponent},
  {path: 'contact',
  component: ContactComponent},
  {path: '',
  redirectTo:'home',
  pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouterModuleModule { }
