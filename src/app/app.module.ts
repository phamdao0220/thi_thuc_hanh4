import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAwesomeComponent } from './components/awesome/list-awesome/list-awesome.component';
import { AddAwesomeComponent } from './components/awesome/add-awesome/add-awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAwesomeComponent,
    AddAwesomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
