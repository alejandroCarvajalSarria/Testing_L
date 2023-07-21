import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

import { MainComponent } from './main.component';
import { DataEffects } from '../../store/effects';
import { Observable, of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { hot, cold } from 'jasmine-marbles';

import { GetData, GetDataSuccess, GetDataFailure  } from '../../store/actions';
import { Data } from '../../types/data.interface';
import { setupData } from '../../untilities/db-data';

describe('MainComponent', () => {
  let actions$: Observable<Action>;
  let effects: DataEffects;
  let dataService: jasmine.SpyObj<DataService>;

  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  const dataServiceSpy = jasmine.createSpyObj('DataService', ['getData']);


  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      providers: [
        DataEffects,
        provideMockActions(() => actions$),
        { provide: DataService, useValue: dataServiceSpy }
      ],
      imports:[
        StoreModule.forRoot({})
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        effects = TestBed.inject(DataEffects);
        dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
      });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  
  fit('should get data and manage it\'s state it through rxjs', () => {
    const dataVal:Data[] = setupData();
    const action = GetData();
    const completion = GetDataSuccess({data: dataVal});

    debugger;
    // Set up the mock service to return the data
    dataService.getData.and.returnValue(of(dataVal));
    debugger;

    // Use Jasmine's hot() method to create an Observable of actions
    actions$ = hot('-a', { a: action });

    /* Use Jasmine's toBeObservable() method in conjunction with the
     cold() method to test the output of the effect */
    expect(effects.getData$).toBeObservable(
      cold('-b', { b: completion })
    );
  });

  // fit('should get data that fits the local interface for \'Data\'', ()=>{



  // })



});
