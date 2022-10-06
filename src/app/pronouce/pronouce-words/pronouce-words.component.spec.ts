import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronouceWordsComponent } from './pronouce-words.component';

describe('PronouceWordsComponent', () => {
  let component: PronouceWordsComponent;
  let fixture: ComponentFixture<PronouceWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronouceWordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronouceWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
