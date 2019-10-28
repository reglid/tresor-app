import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorQuestDisplayComponent } from './tresor-quest-display.component';

describe('TresorQuestDisplayComponent', () => {
  let component: TresorQuestDisplayComponent;
  let fixture: ComponentFixture<TresorQuestDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresorQuestDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorQuestDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
