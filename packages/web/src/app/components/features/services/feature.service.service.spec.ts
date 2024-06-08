import { TestBed } from '@angular/core/testing';
import { FeatureService } from './feature.service.service';

describe('FaetureServiceService', () => {
  let service: FeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
