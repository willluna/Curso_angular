import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonoesComponent } from './botonoes.component';

describe('BotonoesComponent', () => {
  let component: BotonoesComponent;
  let fixture: ComponentFixture<BotonoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotonoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
