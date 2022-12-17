import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruoComponent } from './monstruo.component';

describe('MonstruoComponent', () => {
  let component: MonstruoComponent;
  let fixture: ComponentFixture<MonstruoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstruoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
