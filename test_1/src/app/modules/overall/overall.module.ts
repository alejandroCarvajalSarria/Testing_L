import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverallRoutingModule } from './overall-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { DataEffects } from './store/effects';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    OverallRoutingModule,
    StoreModule.forFeature('data', reducers),
    EffectsModule.forFeature([DataEffects])
  ]
})
export class OverallModule { }
