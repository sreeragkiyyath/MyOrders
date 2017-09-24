import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingComponentComponent } from './shopping-component/shopping-component.component';
import { ShopingItemComponent } from './shopping-component/shoping-item/shoping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingComponentComponent,
    ShopingItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
