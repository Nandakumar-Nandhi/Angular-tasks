import { TestBed } from '@angular/core/testing';

import { VcourseService } from './vcourse.service';

describe('VcourseService', () => {
  let service: VcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
