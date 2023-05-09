import { TimeHoursPipe } from './time-hours.pipe';

describe('TimeHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
