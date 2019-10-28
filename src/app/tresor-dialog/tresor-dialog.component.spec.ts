import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorDialogComponent } from './tresor-dialog.component';

describe('TresorDialogComponent', () => {
  let component: TresorDialogComponent;
  let fixture: ComponentFixture<TresorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
