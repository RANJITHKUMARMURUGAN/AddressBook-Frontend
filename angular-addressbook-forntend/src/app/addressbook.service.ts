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

  /*make a Rest API*/
  getAddressBookList(): Observable<AddressBook[]>{
    return this.httpClient.get<AddressBook[]>(`${this.baseUrl}`)
  }

  /*to make rest API call to in this method, and send to the data internally 
  store the mysql data */
  /*this is the post request to send to data, the body of the post method*/
  createAddressBook(addressbook: AddressBook):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`,addressbook);
  }

  /* Rest Client code which make [ GET BY ID ] Addressbook Rest API */
  getAddressBookById(id: number): Observable<AddressBook>{
    return this.httpClient.get<AddressBook>(`${this.baseUrl}/${id}`);
  }

  /* Rest Client code which make UPDATE Addressbook Rest API */
  updateAddressbook(id: number, addressbook: AddressBook): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,addressbook);
  }

  /* Rest Client code which make DELETE Addressbook Rest API */
  deleteAddressbook(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
