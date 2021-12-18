import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor.service';

import { AppComponent } from './app.component';
import { DataComponent } from './knowledge/knowledge.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { CatsComponent } from './cats/cats.component';

import { ApiCatService } from './services/cats.service';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    HomeComponent,
    ExperienceComponent,
    CatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiCatService,
              { provide: HTTP_INTERCEPTORS, 
                useClass: TokenInterceptor, 
                multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
