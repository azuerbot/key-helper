import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyAxModule} from 'key-ax';
import {  } from '../../projects/key-ax/src/lib/key-ax.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KeyAxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
