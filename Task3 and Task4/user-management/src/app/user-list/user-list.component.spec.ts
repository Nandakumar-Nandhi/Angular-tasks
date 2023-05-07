import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { User } from 'src/user';
import { SharedModule } from 'src/shared/shared.module';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let element:HTMLElement;
  let dummyUsers:User[]=[
    {
      "id": "1",
      "age": 36,
      "firstName": "Bradford",
      "lastName": "Ledner",
      "isDeleted": false,
      "login": "bradford.ledner",
      "password": "Ledner@123",
      "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
    },
    {
      "id": "2",
      "age": 51,
      "firstName": "Russel",
      "lastName": "Ratke",
      "isDeleted": false,
      "login": "russel.ratke",
      "password": "4UlQxVtOMA",
      "lastUpdated": new Date("2023-04-19T06:36:48.115Z")
    },
    {
      "id": "3",
      "age": 55,
      "firstName": "Mendy",
      "lastName": "Schmidt",
      "isDeleted": false,
      "login": "mendy.schmidt",
      "password": "tOBnf0UjK1",
      "lastUpdated": new Date("2023-04-19T06:36:48.115Z")
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent,FilterPipe],
      imports:[SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.users=dummyUsers;
    component.btnName="Deactivate";
    element=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the user inputs',()=>{
    expect(component.users).toBeDefined();
  });

  it('should have a app-user component with in users list with btnName Deactivate',()=>{
    expect(element.querySelector('app-user')).toBeTruthy();
  });

  it('should have a app-user component with in users list with btnName Activate',()=>{
    component.btnName="Activate";
    fixture.detectChanges();
    expect(element.querySelector('app-user')).toBeFalsy();
  });


});
