import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { OrbitCountsComponent } from './orbit-counts/orbit-counts.component';
import { WarningDirective } from './warning.directive';
import { CountsDirective } from './counts.directive';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    OrbitCountsComponent,
    WarningDirective,
    CountsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
