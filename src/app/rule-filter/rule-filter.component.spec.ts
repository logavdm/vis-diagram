import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleFilterComponent } from './rule-filter.component';

describe('RuleFilterComponent', () => {
  let component: RuleFilterComponent;
  let fixture: ComponentFixture<RuleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
