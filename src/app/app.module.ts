import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { HttpClientModule } from '@angular/common/http';
import { ExibitionItemComponent } from './exibitions/exibition-item/exibition-item.component';
import { AddExibitionComponent } from './exibitions/add-exibition/add-exibition.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExibitionPageComponent } from './exibitions/exibition-page/exibition-page.component';
import { ArtworkItemComponent } from './exibitions/exibition-page/artwork-item/artwork-item.component';
import { ArtworkEditComponent } from './exibitions/exibition-page/artwork-edit/artwork-edit.component';
import { ArtworkDetailsComponent } from './exibitions/exibition-page/artwork-item/artwork-details/artwork-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavBarComponent,
    ExibitionsComponent,
    ExibitionItemComponent,
    AddExibitionComponent,
    ExibitionPageComponent,
    ArtworkItemComponent,
    ArtworkEditComponent,
    ArtworkDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
