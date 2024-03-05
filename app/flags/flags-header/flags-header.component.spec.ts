import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsHeaderComponent } from './flags-header.component';

describe('FlagsHeaderComponent', () => {
  let component: FlagsHeaderComponent;
  let fixture: ComponentFixture<FlagsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
