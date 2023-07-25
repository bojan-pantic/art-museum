import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExibitionComponent } from './add-exibition.component';

describe('AddExibitionComponent', () => {
  let component: AddExibitionComponent;
  let fixture: ComponentFixture<AddExibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExibitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
