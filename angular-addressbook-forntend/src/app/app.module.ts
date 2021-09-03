import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookListComponent } from './addressbook-list/addressbook-list.component';
import { CreateAddressbookComponent } from './create-addressbook/create-addressbook.component';
import { FormsModule } from '@angular/forms';
import { UpdateAddressbookComponent } from './update-addressbook/update-addressbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookListComponent,
    CreateAddressbookComponent,
    UpdateAddressbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
