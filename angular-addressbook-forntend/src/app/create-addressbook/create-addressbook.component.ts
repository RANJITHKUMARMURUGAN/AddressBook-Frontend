import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBook } from '../address-book';
import { AddressbookService } from '../addressbook.service';

@Component({
  selector: 'app-create-addressbook',
  templateUrl: './create-addressbook.component.html',
  styleUrls: ['./create-addressbook.component.css']
})
export class CreateAddressbookComponent implements OnInit {

  addressbook: AddressBook = new AddressBook(); //All Properties for AddressBook Class Attributes
  
  //injecting using the constructor addressBookService Class//
  constructor(private addressbookService: AddressbookService,
    private router: Router) { }

  ngOnInit(): void {
  }

  //will create save AddressBook Method here 
  saveAddressBook(){
    this.addressbookService.createAddressBook(this.addressbook).subscribe( data =>{
      console.log(data); //addressbook form successfully then,
      this.goToAddressbookList();
    },
    error => console.log(error));
  }

/*we should able to  navigate to the AddressBookList, so we going to use ROUTER here*/
/*so am am going to use one separate METHOD*/
  goToAddressbookList(){
    /*navigate to the addressbook list page*/
    this.router.navigate(['/addressbook']);
  }

  onSubmit(){
    /*once we submit the data, the form data will be available inside this method  */
    console.log(this.addressbook);
    this.saveAddressBook();
  }
}
