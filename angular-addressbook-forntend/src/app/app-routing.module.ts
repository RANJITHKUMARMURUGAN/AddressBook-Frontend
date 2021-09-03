import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressbookListComponent } from './addressbook-list/addressbook-list.component';

const routes: Routes = [
  { path: 'addressbook', component: AddressbookListComponent }, //will get Rander
  {path: '', redirectTo: 'addressbook',pathMatch: 'full'}, //redirect 4200/employees like that
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
