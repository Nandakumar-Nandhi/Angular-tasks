import { ComponentFixture, TestBed, waitForAsync,inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ManageUserComponent } from './manage-user.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { UserService } from 'src/user.service';
import { of } from 'rxjs';
describe('ManageUserComponent', () => {
  let component: ManageUserComponent;
  let fixture: ComponentFixture<ManageUserComponent>;
  let element:HTMLElement;
  let dummyUsers=[{
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
  }];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUserComponent,FullNamePipe ],
      imports:[HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUserComponent);
    component = fixture.componentInstance;
    component.users=dummyUsers;
    element=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the create button',()=>{
    expect(element.querySelector('.create')).toBeTruthy();
    expect(element.querySelector('.create')?.textContent).toEqual('Create');
  });

  it('should have the details button for user',()=>{
    expect(element.querySelector('.details')).toBeTruthy();
    expect(element.querySelector('.details')?.textContent).toEqual('Details');
  });

  it('should have the edit button for user',()=>{
    expect(element.querySelector('.edit')).toBeTruthy();
    expect(element.querySelector('.edit')?.textContent).toEqual('Edit');
  });

  it('should have a router-outlet defined for child routes',()=>{
    expect(element.querySelector('router-outlet')).toBeTruthy();
  });

  it('should get the users on ngOnInit',waitForAsync(
    inject([UserService],(userService:UserService)=>{
      expect(component.users).toBeDefined();
      expect(component.users.length).toEqual(dummyUsers.length);
      spyOn(userService,'getUsers').and.returnValue(of(dummyUsers));
      component.ngOnInit();
      expect(userService.getUsers).toHaveBeenCalled();
      expect(component.users).toEqual(dummyUsers);
    })
  ));

});
