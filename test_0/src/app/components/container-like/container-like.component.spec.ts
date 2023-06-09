import { ComponentFixture, TestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';

import { ContainerLikeComponent } from './container-like.component';
import { AppModule } from 'src/app/app.module';
import { DataService } from 'src/app/services/data/data.service';
import { CommonModule } from '@angular/common';
import { PresentationalComponent } from '../presentational/presentational.component';
import { setupCourses } from 'src/app/shared/setup-test-data';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { click } from 'src/app/shared/utilities';

describe('ContainerLikeComponent', () => {
  let component: ContainerLikeComponent;
  let fixture: ComponentFixture<ContainerLikeComponent>;
  let el: DebugElement;
  let dataService: any;

  const beginnerCourses = setupCourses()
  .filter(course => course.category == 'BEGINNER');

  const advancedCourses = setupCourses()
    .filter(course => course.category == 'ADVANCED');



  beforeEach(
  fakeAsync(()=>{
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['findAllCourses'])

    TestBed.configureTestingModule({
      imports:[
        AppModule, 
        NoopAnimationsModule
      ],
      providers: [
        { provide: DataService, useValue: dataServiceSpy},
      ]
    })
      .compileComponents()
        .then(()=>{
          fixture = TestBed.createComponent(ContainerLikeComponent);
          component = fixture.componentInstance;
          el = fixture.debugElement;
          dataService = TestBed.inject(DataService)
        })


  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display only beginner courses', ()=>{
    dataService.findAllCourses.and.returnValue(of(beginnerCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('section'));
    expect(tabs.length).withContext('Unexpected number of tabs found').toBe(1);
  });

  it('should fetch only advanced courses', ()=>{
    dataService.findAllCourses.and.returnValue(of(advancedCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('section'));
    expect(tabs.length).withContext('Unexpected number of tabs found').toBe(1);
  });

  it('should be running element manipulation correctly - flush() & fakeAsync()', fakeAsync(()=>{
    dataService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const sections = el.queryAll(By.css("section"));
    console.log("Section button clicked:", sections[1]);
    
    click(sections[1]);

    fixture.detectChanges();

    flush();
    const titles = el.queryAll(By.css('.item-title'));
    const firstAdvanced = el.query(By.css('.advancedCourse'))
    expect(titles.length).withContext('Could not find titles').toBeGreaterThan(0);
    expect(firstAdvanced.nativeElement.textContent).toContain("Angular Security Course");

  }));


  it('should be running element manipulation correctly - waitForAsync()', waitForAsync(()=>{
    dataService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const sections = el.queryAll(By.css("section"));
    console.log("Section button clicked:", sections[1]);
    
    click(sections[1]);

    fixture.whenStable().then(()=>{
          const titles = el.queryAll(By.css('.item-title'));
          const firstAdvanced = el.query(By.css('.advancedCourse'))
          expect(titles.length).withContext('Could not find titles').toBeGreaterThan(0);
          expect(firstAdvanced.nativeElement.textContent).toContain("Angular Security Course");
    })

  }));

  


});

