import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMyComponentComponent } from './test-my-component.component';

describe('TestMyComponentComponent', () => {
  let component: TestMyComponentComponent;
  let fixture: ComponentFixture<TestMyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
