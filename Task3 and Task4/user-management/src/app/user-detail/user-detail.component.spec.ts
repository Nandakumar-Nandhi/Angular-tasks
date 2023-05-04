import { ComponentFixture, TestBed, waitForAsync,inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { UserDetailComponent } from './user-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from 'src/user';
import { FullNamePipe } from '../pipes/full-name.pipe';
import { StatusPipe } from '../pipes/status.pipe';
import { UserService } from 'src/user.service';
import { of } from 'rxjs';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let element:HTMLElement;
  let dummySelectedUser:User={
      "id": "1",
      "age": 36,
      "firstName": "Bradford",
      "lastName": "Ledner",
      "isDeleted": false,
      "login": "bradford.ledner",
      "password": "Ledner@123",
      "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailComponent,FullNamePipe,StatusPipe ],
      imports:[RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;

    component.selectedUser=dummySelectedUser;
    component.id=dummySelectedUser.id;

    element=fixture.debugElement.nativeElement;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the selected user based on id',waitForAsync(
    inject([UserService],(userService:UserService)=>{
        const dummyUser={
          "id": "2",
          "age": 51,
          "firstName": "Russel",
          "lastName": "Ratke",
          "isDeleted": false,
          "login": "russel.ratke",
          "password": "4UlQxVtOMA",
          "lastUpdated": new Date("2023-04-19T06:36:48.115Z")
        };

        spyOn(userService,'getUser').and.returnValue(of(dummyUser));
        component.setSelectedUser(dummyUser.id);
        expect(userService.getUser).toHaveBeenCalled();
        fixture.detectChanges();
        expect(component.selectedUser).toEqual(dummyUser);
    })
  ));

  /*xit('should check all the data bindings of selected user',()=>{
    expect(element.querySelector('.login')?.innerHTML.trim()).toEqual('bradford.ledner');
    expect(element.querySelector('.fName')?.innerHTML.trim()).toEqual('Bradford');
    expect(element.querySelector('.lName')?.innerHTML.trim()).toEqual('Ledner');
    expect(element.querySelector('.age')?.innerHTML.trim()).toEqual('36');
    expect(element.querySelector('.updated')?.innerHTML.trim()).toEqual('Apr 20, 2023');
  });

  xit('should check the class binding based on isDeleted',()=>{
    expect(element.querySelector('.text-success')).toBeTruthy();
    expect(element.querySelector('.card-text')?.innerHTML.trim()).toEqual('Active');
    component.selectedUser.isDeleted=true;
    fixture.detectChanges();
    expect(element.querySelector('.text-danger')).toBeTruthy();
    expect(element.querySelector('.card-text')?.innerHTML.trim()).toEqual('Deleted');
  });*/
  

});
