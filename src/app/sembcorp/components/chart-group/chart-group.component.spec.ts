import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGroupComponent } from './chart-group.component';

describe('ChartGroupComponent', () => {
  let component: ChartGroupComponent;
  let fixture: ComponentFixture<ChartGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
