import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessBordComponent } from './chess-bord.component';

describe('ChessBordComponent', () => {
  let component: ChessBordComponent;
  let fixture: ComponentFixture<ChessBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChessBordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChessBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
