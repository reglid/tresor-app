import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorSolutionInputComponent } from './tresor-solution-input.component';

describe('TresorSolutionInputComponent', () => {
  let component: TresorSolutionInputComponent;
  let fixture: ComponentFixture<TresorSolutionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresorSolutionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorSolutionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
