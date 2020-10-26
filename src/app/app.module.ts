import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';

import { MainOrganization } from './mainOrganization/mainOrganization.component';
import { Filial } from './filial/filial.component';
import { PopupFormMain } from './popupFormMain/popupFormMain.component';
import { PopupFormFilial } from './popupFormFilial/popupFormFilial.component';
import { mainReducer } from './store/reducers/main.reducer';
import { PopupFormMainEditComponent } from './popupFormMainEdit/popupFormMainEdit.component';
import { PopupFormFilialAddComponent } from './popupFormFilialAdd/popupFormFilialAdd.component';

@NgModule({
  declarations: [
    AppComponent,
    MainOrganization,
    Filial,
    PopupFormMain,
    PopupFormFilial,
    PopupFormMainEditComponent,
    PopupFormFilialAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ reducer: mainReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
