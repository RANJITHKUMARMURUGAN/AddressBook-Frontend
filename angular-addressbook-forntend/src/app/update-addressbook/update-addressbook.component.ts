import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBook } from '../address-book';
import { AddressbookService } from '../addressbook.service';

@Component({
  selector: 'app-update-addressbook',
  templateUrl: './update-addressbook.component.html',
  styleUrls: ['./update-addressbook.component.css']
})
export class UpdateAddressbookComponent implements OnInit {

  id!: number;
  addressbook: AddressBook = new AddressBook();
  constructor(private addressbookService: AddressbookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.addressbookService.getAddressBookById(this.id).subscribe(data => {
      this.addressbook = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.addressbookService.updateAddressbook(this.id, this.addressbook).subscribe(data =>{
      this.goToAddressbookList();
    }, error => console.log(error));
  }

  goToAddressbookList(){
    /*navigate to the addressbook list page*/
    this.router.navigate(['/addressbook']);
  }
}
