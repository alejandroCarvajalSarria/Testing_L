import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { PresentationalComponent } from './presentational.component';
import { AppModule } from 'src/app/app.module';
import { setupCourses } from 'src/app/shared/setup-test-data';
import { By } from '@angular/platform-browser';

describe('PresentationalComponent', () => {
  let component: PresentationalComponent;
  let fixture: ComponentFixture<PresentationalComponent>;
  let el: DebugElement;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PresentationalComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      })
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the list', () => {
    component.list = setupCourses();
    fixture.detectChanges();
    const cards = el.queryAll(By.css(".testConts"));
    
    expect(cards).withContext('Could not find cards').toBeTruthy();
    expect(cards.length).withContext('Obtained different amount of cards').toBe(12);
  });


  it('should display the first item on the list', () => {
    component.list = setupCourses();
    fixture.detectChanges();
    const course = component.list[0];
    const card = el.query(By.css('.testConts')),
      title = card.query(By.css('.item-title')),
      img = card.query(By.css('img'))

    expect(card).withContext('Could not find course card!').toBeTruthy();
    expect(title.nativeElement.textContent).withContext('Title failed to be tested!').toBe(course.titles.description);
    expect(img.nativeElement.src).withContext('Image failed to be tested!');
  });
});
