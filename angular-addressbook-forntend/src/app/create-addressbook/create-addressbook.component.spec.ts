import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddressbookComponent } from './create-addressbook.component';

describe('CreateAddressbookComponent', () => {
  let component: CreateAddressbookComponent;
  let fixture: ComponentFixture<CreateAddressbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAddressbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAddressbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
