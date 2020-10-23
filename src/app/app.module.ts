import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { MainOrganization } from './mainOrganization/mainOrganization.component';
import { Filial } from './filial/filial.component';
import { popupFormMain } from './popupFormMain/popupFormMain.component';
import { popupFormFilial } from './popupFormFilial/popupFormFilial.component';

import { modalOpenReducer } from './store/reducers/modal.reducer';
import { organizationReducer } from './store/reducers/organization.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainOrganization,
    Filial,
    popupFormMain,
    popupFormFilial,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        isOpen: modalOpenReducer,
        organizationData: organizationReducer,
      },
      {}
    ),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
