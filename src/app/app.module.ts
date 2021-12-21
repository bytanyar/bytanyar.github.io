import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor.service';

import { AppComponent } from './app.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { CatsComponent } from './cats/cats.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

import { ApiCatService } from './services/cats.service';


@NgModule({
  declarations: [
    AppComponent,
    ArtworkComponent,
    CatsComponent,
    ExperienceComponent,
    HomeComponent,
    KnowledgeComponent
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
