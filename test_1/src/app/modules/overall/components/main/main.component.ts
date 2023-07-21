import { Store, select } from "@ngrx/store"
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


import { Data } from '../../types/data.interface';
import * as DataActions from './../../store/actions'
import { AppStateInterface } from 'src/app/types/app-state.interface';
import { dataSelector, errorSelector, isLoadingSelector } from '../../store/selectors';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isLoading$!:Observable<boolean>;
  appliances$!:Observable<Data[]>;
  error$!:Observable<string | null>;

  constructor(private store:Store<AppStateInterface>){
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.appliances$ = this.store.pipe(select(dataSelector));
   }


  ngOnInit(): void {
  }


  getData(){
    this.store.dispatch(DataActions.GetData())

  }

}
