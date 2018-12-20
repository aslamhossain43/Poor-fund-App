import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGrantNotGrantComponent } from './manage-grant-not-grant.component';

describe('ManageGrantNotGrantComponent', () => {
  let component: ManageGrantNotGrantComponent;
  let fixture: ComponentFixture<ManageGrantNotGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGrantNotGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGrantNotGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
