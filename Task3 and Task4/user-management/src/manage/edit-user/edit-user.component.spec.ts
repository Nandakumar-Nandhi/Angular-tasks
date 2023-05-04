import { ComponentFixture, TestBed, waitForAsync,inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { EditUserComponent } from './edit-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from 'src/user';
import { UserService } from 'src/user.service';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let dummyUser:User;
  let element:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    element=fixture.debugElement.nativeElement;
    dummyUser={
      "id": "1",
      "age": 36,
      "firstName": "Bradford",
      "lastName": "Ledner",
      "isDeleted": true,
      "login": "bradford.ledner",
      "password": "Ledner@123",
      "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the user by id',waitForAsync(
    inject([UserService],(userService:UserService)=>{
      spyOn(userService,'getUser').and.returnValue(of(dummyUser));
      component.setSelectedUser('1');
      expect(userService.getUser).toHaveBeenCalled();
      fixture.detectChanges();
      expect(component.selectedUser).toEqual(dummyUser);
    })
  ));


  it('should have the specified labels',()=>{
    component.selectedUser=dummyUser;
    fixture.detectChanges();
    expect(element.querySelector('.password')).toBeTruthy();
    expect(element.querySelector('.age')).toBeTruthy();
    expect(element.querySelector('.password')?.textContent).toEqual('Password');
    expect(element.querySelector('.age')?.textContent).toEqual('Age');
  });

  
});

