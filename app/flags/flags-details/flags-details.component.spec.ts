import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsDetailsComponent } from './flags-details.component';

describe('FlagsDetailsComponent', () => {
  let component: FlagsDetailsComponent;
  let fixture: ComponentFixture<FlagsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
