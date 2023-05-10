import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AsyncLikeComponent } from './async-like.component';

describe('AsyncLikeComponent', () => {
  let component: AsyncLikeComponent;
  let fixture: ComponentFixture<AsyncLikeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncLikeComponent]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AsyncLikeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })


  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
