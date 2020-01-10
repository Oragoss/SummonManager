import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollGeneratorComponent } from './roll-generator.component';

describe('RollGeneratorComponent', () => {
  let component: RollGeneratorComponent;
  let fixture: ComponentFixture<RollGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
