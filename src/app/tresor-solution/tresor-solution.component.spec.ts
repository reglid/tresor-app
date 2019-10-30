import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorSolutionComponent } from './tresor-solution.component';

describe('TresorSolutionComponent', () => {
  let component: TresorSolutionComponent;
  let fixture: ComponentFixture<TresorSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresorSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
