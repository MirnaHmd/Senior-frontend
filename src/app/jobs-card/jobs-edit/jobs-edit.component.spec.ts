import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsEditComponent } from './jobs-edit.component';

describe('JobsEditComponent', () => {
  let component: JobsEditComponent;
  let fixture: ComponentFixture<JobsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
