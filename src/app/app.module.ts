import { NgModule } from '@angular/core';
import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon'
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { BookStoreComponent } from './book-store/book-store.component';
import { DomesticBooksComponent } from './domestic-books/domestic-books.component'
import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    DomesticBooksComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    CarouselModule,
    WavesModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BookStoreComponent,
      },
      {
        path: 'bookstore',
        component: BookStoreComponent,
      },
      {
        path: 'domesticbooks',
        component: DomesticBooksComponent,
      },
    ]),
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
