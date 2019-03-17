import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksViewdetailsComponent } from './works-viewdetails.component';

describe('WorksViewdetailsComponent', () => {
  let component: WorksViewdetailsComponent;
  let fixture: ComponentFixture<WorksViewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksViewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksViewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
