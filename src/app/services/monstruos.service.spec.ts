import { TestBed } from '@angular/core/testing';

import { MonstruosService } from './monstruos.service';

describe('MonstruosServiceService', () => {
  let service: MonstruosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstruosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
