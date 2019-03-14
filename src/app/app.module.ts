import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RecipeService } from './recipe.service';
import {APP_BASE_HREF} from '@angular/common';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';

const appRoutes: Routes = [

  //paths for routing service. Home is set to search component HTML
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'saved',  component: SavedRecipesComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SavedRecipesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
