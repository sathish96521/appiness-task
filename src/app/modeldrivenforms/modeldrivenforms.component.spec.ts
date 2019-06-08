import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivenformsComponent } from './modeldrivenforms.component';

describe('ModeldrivenformsComponent', () => {
  let component: ModeldrivenformsComponent;
  let fixture: ComponentFixture<ModeldrivenformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldrivenformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldrivenformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
