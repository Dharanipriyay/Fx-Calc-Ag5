import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import{CountrydataService} from './countrydata.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoneycalcComponent } from './moneycalc/moneycalc.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneycalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountrydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
