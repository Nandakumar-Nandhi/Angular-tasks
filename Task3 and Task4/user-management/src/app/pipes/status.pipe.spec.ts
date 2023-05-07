import { StatusPipe } from './status.pipe';

describe('StatusPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });

  it("should return Deleted for true",()=>{
    const pipe=new StatusPipe();
    expect(pipe.transform(true)).toEqual("Deleted");
  })

  it("should return Active for false",()=>{
    const pipe=new StatusPipe();
    expect(pipe.transform(false)).toEqual("Active");
  })
});
