import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylsBrowserComponent } from './vinyls-browser.component';

describe('VinylsBrowserComponent', () => {
  let component: VinylsBrowserComponent;
  let fixture: ComponentFixture<VinylsBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylsBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylsBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
