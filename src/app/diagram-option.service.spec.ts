import { TestBed } from '@angular/core/testing';

import { DiagramOptionService } from './diagram-option.service';

describe('DiagramOptionService', () => {
  let service: DiagramOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
