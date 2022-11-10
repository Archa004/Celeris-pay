import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationDataComponent } from './integration-data.component';

describe('IntegrationDataComponent', () => {
  let component: IntegrationDataComponent;
  let fixture: ComponentFixture<IntegrationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
