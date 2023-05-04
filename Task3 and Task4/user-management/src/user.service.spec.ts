import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from './user';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpTestingController=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the users method',()=>{
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
    ];
    service.getUsers().subscribe(data=>{
      expect(data).toBe(dummyUsers);
    });
    const req=httpTestingController.expectOne('http://localhost:3000/users');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toEqual('json');
    req.flush(dummyUsers);
    httpTestingController.verify();
  });

  it('should get a single user with id',()=>{
    let dummyUser:User={
        "id": "1",
        "age": 36,
        "firstName": "Bradford",
        "lastName": "Ledner",
        "isDeleted": false,
        "login": "bradford.ledner",
        "password": "Ledner@123",
        "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
    }
    service.getUser('1').subscribe(data=>{
      expect(data).toBe(dummyUser);
    });
    const req=httpTestingController.expectOne('http://localhost:3000/users/1');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toEqual('json');
    req.flush(dummyUser);
    httpTestingController.verify();
  });

  it('should delete a user with id',()=>{
    let dummyUser:User={
        "id": "1",
        "age": 36,
        "firstName": "Bradford",
        "lastName": "Ledner",
        "isDeleted": false,
        "login": "bradford.ledner",
        "password": "Ledner@123",
        "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
    }
    dummyUser.isDeleted=true;
    service.deleteUser('1').subscribe(data=>{
      expect(data).toEqual(dummyUser);
    });
    const req=httpTestingController.expectOne({
      method:'PATCH',
      url:'http://localhost:3000/users/1'
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('PATCH');
    expect(req.request.responseType).toEqual('json');
    req.flush({...dummyUser,isDeleted:true});
    httpTestingController.verify();
  });

  it('should activate a user with id',()=>{
    let dummyUser:User={
        "id": "1",
        "age": 36,
        "firstName": "Bradford",
        "lastName": "Ledner",
        "isDeleted": true,
        "login": "bradford.ledner",
        "password": "Ledner@123",
        "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
    }
    dummyUser.isDeleted=false;
    service.activateUser('1').subscribe(data=>{
      expect(data).toEqual(dummyUser);
    });
    const req=httpTestingController.expectOne({
      method:'PATCH',
      url:'http://localhost:3000/users/1'
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('PATCH');
    expect(req.request.responseType).toEqual('json');
    req.flush({...dummyUser,isDeleted:false});
    httpTestingController.verify();
  });

  it('should create a user ',()=>{
    let newUser:User={
        "id": "34",
        "age": 36,
        "firstName": "Harry",
        "lastName": "Potter",
        "isDeleted": false,
        "login": "harry.potter",
        "password": "Harry@123",
        "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
    }
    service.createUser(newUser).subscribe(data=>{
      expect(data).toEqual(newUser);
    });
    const req=httpTestingController.expectOne({
      method:'POST',
      url:'http://localhost:3000/users'
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('POST');
    expect(req.request.responseType).toEqual('json');
    req.flush(newUser);
    httpTestingController.verify();
  });

  it('should edit details of an user ',()=>{
    let newUser:User={
        "id": "34",
        "age": 36,
        "firstName": "Harry",
        "lastName": "Potter",
        "isDeleted": false,
        "login": "harry.potter",
        "password": "Har@123",
        "lastUpdated": new Date("2023-04-20T12:02:40.380Z")
    }
    newUser.age=33;
    newUser.password="Harry@123";

    service.editUser("34",newUser).subscribe(data=>{
      expect(data).toEqual(newUser);
    });

    const req=httpTestingController.expectOne({
      method:'PATCH',
      url:'http://localhost:3000/users/34'
    });
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toBe('PATCH');
    expect(req.request.responseType).toEqual('json');
    req.flush(newUser);
    httpTestingController.verify();
  });

});
