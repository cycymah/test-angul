import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainOrganization } from './mainOrganization/mainOrganization.component';
import { Filial } from './filial/filial.component';
import { popupFormMain } from './popupFormMain/popupFormMain.component';
// import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [AppComponent, MainOrganization, Filial, popupFormMain],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
