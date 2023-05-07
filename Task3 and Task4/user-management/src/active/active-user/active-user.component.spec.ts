import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActiveUserComponent } from './active-user.component';
import { SharedModule } from 'src/shared/shared.module';
import { UserService } from 'src/user.service';
import { of } from 'rxjs';
import { User } from 'src/user';

describe('ActiveUserComponent', () => {
  let component: ActiveUserComponent;
  let fixture: ComponentFixture<ActiveUserComponent>;
  let service:UserService;
  let httpTestController:HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveUserComponent ],
      imports:[HttpClientTestingModule,SharedModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(UserService);
    httpTestController=TestBed.inject(HttpTestingController);
  });

  let users:User[];
  beforeEach(()=>{
    users=[{
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
    }]
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Button text should be Deactivate",()=>{
    expect(component.btnName).toEqual("Deactivate");
  });
  
  it("should get the users on ngOnInit",waitForAsync(
    inject([UserService],(userService:UserService)=>{
      const result=users;
      spyOn(userService,'getUsers').and.returnValue(of(result));
      component.ngOnInit();
      expect(component.users).toEqual(result);
      expect(userService.getUsers).toHaveBeenCalled();
    })
  ));

  it("should delete the user on deActivate button clicked",waitForAsync(
    inject([UserService],(userService:UserService)=>{
      spyOn(userService,'getUsers').and.returnValue(of(users));
      component.ngOnInit();
      spyOn(userService,'deleteUser').and.returnValue(of({...users[0],isDeleted:true}));
      const deletedUser=users[0];
      deletedUser.isDeleted=true;
      userService.deleteUser(users[0].id).subscribe(data=>{
        expect(data).toEqual(deletedUser);
        expect(component.users.filter(u=>!u.isDeleted).length).toEqual(1);
      });
    })
  ));
  
  it('Should have the app-user-list component',()=>{
    expect(fixture.debugElement.nativeElement.querySelector('app-user-list')).toBeTruthy();
  });

});
