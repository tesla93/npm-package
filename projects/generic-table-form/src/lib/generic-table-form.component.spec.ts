import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableFormComponent } from './generic-table-form.component';

describe('GenericTableFormComponent', () => {
  let component: GenericTableFormComponent;
  let fixture: ComponentFixture<GenericTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
