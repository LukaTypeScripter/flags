import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsSearchComponent } from './flags-search.component';

describe('FlagsSearchComponent', () => {
  let component: FlagsSearchComponent;
  let fixture: ComponentFixture<FlagsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagsSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlagsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
