import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullnameFormComponent } from './fullname-form.component';

describe('FullnameFormComponent', () => {
  let component: FullnameFormComponent;
  let fixture: ComponentFixture<FullnameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullnameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullnameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
