import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcComponent } from './btc.component';

describe('BtcComponent', () => {
  let component: BtcComponent;
  let fixture: ComponentFixture<BtcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtcComponent]
    });
    fixture = TestBed.createComponent(BtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
