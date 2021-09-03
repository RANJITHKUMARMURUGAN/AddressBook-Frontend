import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookListComponent } from './addressbook-list.component';

describe('AddressbookListComponent', () => {
  let component: AddressbookListComponent;
  let fixture: ComponentFixture<AddressbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressbookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
