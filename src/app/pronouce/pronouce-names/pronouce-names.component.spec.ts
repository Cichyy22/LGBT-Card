import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronouceNamesComponent } from './pronouce-names.component';

describe('PronouceNamesComponent', () => {
  let component: PronouceNamesComponent;
  let fixture: ComponentFixture<PronouceNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronouceNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronouceNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
