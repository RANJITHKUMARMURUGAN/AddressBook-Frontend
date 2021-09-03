import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddressbookComponent } from './update-addressbook.component';

describe('UpdateAddressbookComponent', () => {
  let component: UpdateAddressbookComponent;
  let fixture: ComponentFixture<UpdateAddressbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAddressbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAddressbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
