import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopHeaderComponent } from './top-header/top-header.component';
import { QuaggansComponent } from './quaggans/quaggans.component';
import { DailyCraftingComponent } from './daily-crafting/daily-crafting.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [AppComponent, TopHeaderComponent, QuaggansComponent, DailyCraftingComponent, InputFieldComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
