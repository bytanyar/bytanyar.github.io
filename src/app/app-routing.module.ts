import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkComponent } from './artwork/artwork.component';
import { CatsComponent } from './cats/cats.component';
import { HomeComponent } from './home/home.component';
import { NewhomeComponent } from './newhome/newhome.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'newhome', component: NewhomeComponent },
  { path: 'cats', component: CatsComponent},
  { path: 'artwork', component: ArtworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
