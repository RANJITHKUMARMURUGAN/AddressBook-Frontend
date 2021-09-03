import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private addressBookService: AddressbookService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAddressBook();
  }
  private getAddressBook() {
    this.addressBookService.getAddressBookList().subscribe(data => {
      this.addressbook = data;
    })
  }
  /*define the method of Addressbook-list even Listner*/  
  updateAddressbook(id: number) {
    /*pass the Array of the Elements*/
    this.router.navigate(['update-addressbook', id]);
  }

  /*define the event Listner METHOD*/
  deleteAddressbook(id: number){
    this.addressBookService.deleteAddressbook(id).subscribe( data => {
      console.log(data);
      
      this.getAddressBook();
    })
  }
}
