import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressbookListComponent } from './addressbook-list/addressbook-list.component';
import { CreateAddressbookComponent } from './create-addressbook/create-addressbook.component';
import { UpdateAddressbookComponent } from './update-addressbook/update-addressbook.component';

const routes: Routes = [
  { path: 'addressbook', component: AddressbookListComponent }, //will get Rander
  { path: 'create-addressbook', component: CreateAddressbookComponent },
  { path: '', redirectTo: 'addressbook', pathMatch: 'full' }, //redirect 4200/employees like that
  { path: 'update-addressbook/:id', component: UpdateAddressbookComponent} //route for update Addressbook components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
