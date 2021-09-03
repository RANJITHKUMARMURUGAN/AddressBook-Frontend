import { Component, OnInit } from '@angular/core';
import { AddressBook } from '../address-book';
import { AddressbookService } from '../addressbook.service';

@Component({
  selector: 'app-addressbook-list',
  templateUrl: './addressbook-list.component.html',
  styleUrls: ['./addressbook-list.component.css']
})
export class AddressbookListComponent implements OnInit {
  /*propeties call addressbook*/
  addressbook: AddressBook[] = []; 
  constructor(private addressBookService: AddressbookService) { }

  ngOnInit(): void {
    this.getAddressBook();
  }
private getAddressBook(){
  this.addressBookService.getAddressBookList().subscribe(data=>{
    this.addressbook = data;
  })
}
}
