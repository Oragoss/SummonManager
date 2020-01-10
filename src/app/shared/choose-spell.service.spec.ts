import { TestBed } from '@angular/core/testing';

import { ChooseSpellService } from './choose-spell.service';

describe('ChooseSpellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChooseSpellService = TestBed.get(ChooseSpellService);
    expect(service).toBeTruthy();
  });
});
