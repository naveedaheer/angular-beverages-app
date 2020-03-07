import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsualComponent } from './usual.component';

describe('UsualComponent', () => {
  let component: UsualComponent;
  let fixture: ComponentFixture<UsualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
