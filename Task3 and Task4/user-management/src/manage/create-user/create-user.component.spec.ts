import { ComponentFixture, TestBed, waitForAsync,inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateUserComponent } from './create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/user.service';
import { User } from 'src/user';
import { of } from 'rxjs';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let element:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserComponent ],
      imports:[HttpClientTestingModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    element=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getUniqueId function should be defined',()=>{
    expect(component.getUniqueId).toBeDefined();
  });

  it('should create a new user on submitting the form',waitForAsync(
    inject([UserService],(userService:UserService)=>{
      const formData={
        firstName:'Harry',
        lastName:'Potter',
        age:'23',
        login:'harry.potter',
        password:'Harry@123',
        isDeleted:false
      }
      component.registrationForm.setValue(formData);
      const dummyUsers=[
        {
          "id": "1",
          "age": 36,
          "firstName": "Bradford",
          "lastName": "Ledner",
          "isDeleted": false,
          "login": "bradford.ledner",
          "password": "Ledner@123",
          "lastUpdated": "2023-04-20T12:02:40.380Z"
        },
        {
          "id": "2",
          "age": 51,
          "firstName": "Russel",
          "lastName": "Ratke",
          "isDeleted": false,
          "login": "russel.ratke",
          "password": "4UlQxVtOMA",
          "lastUpdated": "2023-04-19T06:36:48.115Z"
        }
      ];
      const newUser={
        id:component.getUniqueId(),
        ...formData,
        age:Number(formData.age),
        lastUpdated:new Date()
      }
      spyOn(userService,'createUser').and.returnValue(of(newUser));
      spyOn(component,'submitForm');
      component.submitForm();
      fixture.detectChanges();
      userService.getUsers().subscribe(data=>{
        expect(data.length).toEqual(dummyUsers.length+1);
      });
      expect(component.submitForm).toHaveBeenCalled();
    }) 
  ));

  it('should check the labels of input fields',()=>{
    let labels=element.querySelectorAll('label')
    expect(labels[0].textContent).toEqual("First Name");
    expect(labels[1].textContent).toEqual("Last Name");
    expect(labels[2].textContent).toEqual("Login");
    expect(labels[3].textContent).toEqual("Password");
    expect(labels[4].textContent).toEqual("Age");
  });

  it('should get errors on empty text fields',()=>{
      const formData={
        firstName:'', // 0th index -> represents default value
        lastName:'',
        age:'',
        login:'',
        password:'',
        isDeleted:false
      }
      component.registrationForm.setValue(formData);
      fixture.detectChanges();
      expect(element.querySelector('small')).toBeTruthy();
      expect(element.querySelector('small')?.textContent).toEqual('First Name is required');

  });

});
