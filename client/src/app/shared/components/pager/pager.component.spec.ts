import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerComponent } from './pager.component';

describe('PaperComponent', () => {
  let component: PagerComponent;
  let fixture: ComponentFixture<PagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
