import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
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
      })

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("should test an asynchronous example with Jasmine done()", (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000)
  });

  it('should test an asynchronous example with Angular\'s fakeAsync() and tick() utility', fakeAsync(() => {
    let test = false;


    /* fakeAsync allow us to simulate the passage of time so we can force the clock forward 
    as much as we need throughout the test to run functionalities */

    setTimeout(() => {
      console.log('running assertions for fakeAsync() tick()');
      test = true;
    }, 1000);

    tick(1000)

    /* If needed, it's possible to rimply run the flush() function
      instead of tick with a desired second to flip, flush makes sure all
      asynchronous tasks completed before continuting. Therefore, one 
      would need to run the assertion(s) expect() function after the flush, as well as the tick() */

      flush();

      expect(test).toBeTruthy();
 
  }));



});
