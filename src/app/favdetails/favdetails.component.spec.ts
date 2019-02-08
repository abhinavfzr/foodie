import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavdetailsComponent } from './favdetails.component';

describe('FavdetailsComponent', () => {
  let component: FavdetailsComponent;
  let fixture: ComponentFixture<FavdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
