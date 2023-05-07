import { User } from 'src/user';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it("should filter the active users based on filtertext Deactivate",()=>{
      const pipe=new FilterPipe();
      let users:User[]=[{
          "id": "1",
          "age": 36,
          "firstName": "Bradford",
          "lastName": "Ledner",
          "isDeleted": false,
          "login": "bradford.ledner",
          "password": "Ledner@123",
          "lastUpdated": new Date()
        },
        {
          "id": "2",
          "age": 51,
          "firstName": "Russel",
          "lastName": "Ratke",
          "isDeleted": false,
          "login": "russel.ratke",
          "password": "4UlQxVtOMA",
          "lastUpdated": new Date()
        }]
    let result=pipe.transform(users,"Deactivate");
    expect(result.length).toEqual(2);
  });

  it("should filter the deleted users based on filtertext Activate",()=>{
    const pipe=new FilterPipe();
    let users:User[]=[{
        "id": "1",
        "age": 36,
        "firstName": "Bradford",
        "lastName": "Ledner",
        "isDeleted": false,
        "login": "bradford.ledner",
        "password": "Ledner@123",
        "lastUpdated": new Date()
      },
      {
        "id": "2",
        "age": 51,
        "firstName": "Russel",
        "lastName": "Ratke",
        "isDeleted": false,
        "login": "russel.ratke",
        "password": "4UlQxVtOMA",
        "lastUpdated": new Date()
      }]
    let result=pipe.transform(users,"Activate");
    expect(result.length).toEqual(0);
  });

  it("should return empty array",()=>{
    const pipe=new FilterPipe();
    let result=pipe.transform([],"Activate");
    expect(result).toEqual([]);
  });

});
