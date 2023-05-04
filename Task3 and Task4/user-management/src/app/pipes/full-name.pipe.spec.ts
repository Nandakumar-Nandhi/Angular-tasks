import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });

  it("should display fullname of user",()=>{
    const pipe=new FullNamePipe();
    expect(pipe.transform("Harry","Potter")).toEqual("Harry Potter");
  });

});
