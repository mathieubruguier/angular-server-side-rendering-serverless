import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverless-sample' }),
    HttpClientModule,
    AppRoutingModule,
    BrowserTransferStateModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
