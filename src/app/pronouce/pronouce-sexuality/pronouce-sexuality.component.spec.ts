import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronouceSexualityComponent } from './pronouce-sexuality.component';

describe('PronouceSexualityComponent', () => {
  let component: PronouceSexualityComponent;
  let fixture: ComponentFixture<PronouceSexualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronouceSexualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronouceSexualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
