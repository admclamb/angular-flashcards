import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksListCardComponent } from './decks-list-card.component';

describe('DecksListCardComponent', () => {
  let component: DecksListCardComponent;
  let fixture: ComponentFixture<DecksListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecksListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecksListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
