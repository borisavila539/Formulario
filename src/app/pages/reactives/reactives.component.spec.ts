import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivesComponent } from './reactives.component';

describe('ReactivesComponent', () => {
  let component: ReactivesComponent;
  let fixture: ComponentFixture<ReactivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
