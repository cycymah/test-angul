import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainOrganization } from './mainOrganization/mainOrganization.component';
import { Filial } from './filial/filial.component';
import { popupFormMain } from './popupFormMain/popupFormMain.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { modalReducer } from './store/reducers/modal.reducer';

@NgModule({
  declarations: [AppComponent, MainOrganization, Filial, popupFormMain],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ isOpen: modalReducer }, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
