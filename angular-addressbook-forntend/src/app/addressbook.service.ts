import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressBook } from './address-book';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
  private baseUrl = "http://localhost:8080/api/addressbook"
  constructor(private httpClient: HttpClient) { }

  getAddressBookList(): Observable<AddressBook[]>{
    return this.httpClient.get<AddressBook[]>(`${this.baseUrl}`)
  } 
}
