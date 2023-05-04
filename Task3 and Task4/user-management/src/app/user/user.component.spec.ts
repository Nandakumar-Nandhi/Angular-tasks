import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { User } from 'src/user';
import { FullNamePipe } from '../pipes/full-name.pipe';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let dummyUser:User={
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    login: '',
    password: '',
    isDeleted: false,
    lastUpdated: new Date()
  }
  let element:HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ,FullNamePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user=dummyUser;
    element=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a dummy user input",()=>{
    dummyUser={
      "id": "1",
      "age": 36,
      "firstName": "Bradford",
      "lastName": "Ledner",
      "isDeleted": false,
      "login": "bradford.ledner",
      "password": "Ledner@123",
      "lastUpdated": new Date()
    },
    component.user=dummyUser;
    fixture.detectChanges();
    expect(component.user).toEqual(dummyUser);
  });

  it("should have full name",()=>{
    dummyUser={
      "id": "1",
      "age": 36,
      "firstName": "Bradford",
      "lastName": "Ledner",
      "isDeleted": false,
      "login": "bradford.ledner",
      "password": "Ledner@123",
      "lastUpdated": new Date()
    },
    component.user=dummyUser;
    fixture.detectChanges();
    expect(component.user).toEqual(dummyUser);
    const fullName=element.querySelector('h5');
    expect(fullName?.textContent).toEqual(dummyUser.firstName+" "+dummyUser.lastName);
  });

  /*xit("should have red border if user is deleted or else green border",()=>{
    expect(element.querySelector('.border-success')).toBeTruthy();
    dummyUser.isDeleted=true;
    fixture.detectChanges();
    expect(element.querySelector('.border-danger')).toBeTruthy();
  });*/

  it("should have the button name Activate and button should be success",()=>{
      component.btnName="Activate";
      fixture.detectChanges();
      expect(component.btnName).toEqual("Activate");
      expect(element.querySelector('.btn-success')).toBeTruthy();
      expect(element.querySelector('.btn-danger')).toBeFalsy();
  });

  it("should have the button name Deactivate and button should be danger",()=>{
    component.btnName="Deactivate";
    fixture.detectChanges();
    expect(component.btnName).toEqual("Deactivate");
    expect(element.querySelector('.btn-danger')).toBeTruthy();
    expect(element.querySelector('.btn-success')).toBeFalsy();
  });

});
