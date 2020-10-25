import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MainOrganization } from './mainOrganization/mainOrganization.component';
import { Filial } from './filial/filial.component';
import { PopupFormMain } from './popupFormMain/popupFormMain.component';
import { PopupFormFilial } from './popupFormFilial/popupFormFilial.component';

import { modalOpenReducer } from './store/reducers/modal.reducer';
import { PopupFormMainEditComponent } from './popupFormMainEdit/popupFormMainEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainOrganization,
    Filial,
    PopupFormMain,
    PopupFormFilial,
    PopupFormMainEditComponent,
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ reducer: modalOpenReducer }),
    // EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
