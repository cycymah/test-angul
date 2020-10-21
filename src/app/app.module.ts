import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainOrganization } from './mainOrganization/mainOrganization.component';
// import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [AppComponent, MainOrganization],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
