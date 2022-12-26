import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardandskillsComponent } from './hardandskills.component';

describe('HardandskillsComponent', () => {
  let component: HardandskillsComponent;
  let fixture: ComponentFixture<HardandskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardandskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardandskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
