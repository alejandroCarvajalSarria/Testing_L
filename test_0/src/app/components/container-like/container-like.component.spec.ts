import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
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
    console.log(dataService);
    
    dataService.findAllCourses.and.returnValue(of(beginnerCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('section'));
    expect(tabs.length).withContext('Unexpected number of tabs found').toBe(1);
  })

  it('should fetch only advanced courses', ()=>{
    dataService.findAllCourses.and.returnValue(of(advancedCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('section'));
    expect(tabs.length).withContext('Unexpected number of tabs found').toBe(1);
  })



});

