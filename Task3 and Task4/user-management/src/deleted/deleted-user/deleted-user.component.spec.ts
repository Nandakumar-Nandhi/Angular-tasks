import { ComponentFixture, TestBed, waitForAsync,inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DeletedUserComponent } from './deleted-user.component';
import { SharedModule } from 'src/shared/shared.module';
import { UserService } from 'src/user.service';
import { User } from 'src/user';
import { of } from 'rxjs';

describe('DeletedUserComponent', () => {
  let component: DeletedUserComponent;
  let fixture: ComponentFixture<DeletedUserComponent>;
  let service:UserService;
  let httpTestController:HttpTestingController;
  let users:User[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedUserComponent ],
      imports:[HttpClientTestingModule,SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(UserService);
    httpTestController=TestBed.inject(HttpTestingController);

  });

  beforeEach(()=>{
    users=[{
      "id": "1",
      "age": 36,
      "firstName": "Bradford",
      "lastName": "Ledner",
      "isDeleted": true,
      "login": "bradford.ledner",
      "password": "Ledner@123",
      "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
    },
    {
      "id": "2",
      "age": 51,
      "firstName": "Russel",
      "lastName": "Ratke",
      "isDeleted": true,
      "login": "russel.ratke",
      "password": "4UlQxVtOMA",
      "lastUpdated": new Date("2023-04-19T06:36:48.115Z")
    }]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Button name should be Activate",()=>{
    expect(component.btnName).toEqual("Activate");
  });

  it("should call the deletedUsers on ngOnInit",()=>{
    spyOn(component,'getDeletedUsers');
    component.ngOnInit();
    expect(component.getDeletedUsers).toHaveBeenCalled();
  });

  it("should get all the users on ngOnInit",waitForAsync(
    inject([UserService],(userService:UserService)=>{
      const result=users;
      spyOn(userService,'getUsers').and.returnValue(of(users));
      component.ngOnInit();
      expect(component.users).toEqual(result);
      expect(userService.getUsers).toHaveBeenCalled();
    })
  ));

  it("should activate a user and reduce the length by 1",waitForAsync(
    inject([UserService],(userService:UserService)=>{
      component.users=users;
      spyOn(userService,'activateUser').and.returnValue(of({...users[0],isDeleted:false}));
      const activatedUser=users[0];
      activatedUser.isDeleted=false;
      userService.activateUser(users[0].id).subscribe(data=>{
        expect(data).toEqual(activatedUser);
        expect(component.users.filter(u=>u.isDeleted).length).toEqual(1);
      });
    })
  ))
  
});
