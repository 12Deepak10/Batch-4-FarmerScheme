import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> ed2b71389bdacb9fb72a63f498910f205776e164

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AdminComponent
=======
    HomeComponent
>>>>>>> ed2b71389bdacb9fb72a63f498910f205776e164
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
