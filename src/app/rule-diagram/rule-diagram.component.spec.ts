import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleDiagramComponent } from './rule-diagram.component';

describe('RuleDiagramComponent', () => {
  let component: RuleDiagramComponent;
  let fixture: ComponentFixture<RuleDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
